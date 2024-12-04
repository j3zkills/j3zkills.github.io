function validarFormulario() {
    const campos = [
        { id: 'nombre', mensaje: 'El nombre no puede estar vacío', validacion: (value) => value.trim() !== '' },
        { id: 'email', mensaje: 'El correo electrónico no es válido', validacion: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) },
        { id: 'telefono', mensaje: 'El teléfono debe tener 9 dígitos', validacion: (value) => /^\d{9}$/.test(value.trim()) },
        { id: 'asunto', mensaje: 'El asunto no puede estar vacío', validacion: (value) => value.trim() !== '' },
        { id: 'mensaje', mensaje: 'El mensaje no puede estar vacío', validacion: (value) => value.trim() !== '' }
    ];

    let esValido = true;


    campos.forEach(campo => {
        document.getElementById(campo.id).classList.remove('error', 'success');
        document.getElementById('error-' + campo.id).textContent = '';
    });

    campos.forEach(campo => {
        const value = document.getElementById(campo.id).value.trim();
        if (!campo.validacion(value)) {
            esValido = false;
            document.getElementById(campo.id).classList.add('error');
            document.getElementById('error-' + campo.id).textContent = campo.mensaje;
        } else {
            document.getElementById(campo.id).classList.add('success');
        }
    });

    if (esValido) {
        Swal.fire({
            title: '¡Éxito!',
            text: 'Formulario enviado correctamente.',
            icon: 'success'
        }).then(() => {
            campos.forEach(campo => {
                document.getElementById(campo.id).value = '';
            });
        });
    } else {
        Swal.fire({
            title: '¡Error!',
            text: 'Por favor revise los campos con errores.',
            icon: 'error'
        });
    }
}
