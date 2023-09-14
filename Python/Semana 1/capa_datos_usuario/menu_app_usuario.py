from Usuario import Usuario
from usuario_dao import UsuarioDAO
from logger_base import log

opcion = None
while opcion != 5:
    print('Opciones: ')
    print('1. Listar usuarios')
    print('2. Agregar usuario')
    print('3. Editar usuario')  
    print('4. Eliminar usuario')
    print('5. Salir')
    opcion = int(input('Ingrese una opción: '))
    if opcion == 1:
        usuarios = UsuarioDAO.seleccionar()
        for usuario in usuarios:
            log.info(usuario)
    elif opcion == 2:
        username_var = input('Ingrese el username: ')
        password_var = input('Ingrese el password: ')
        usuario = Usuario(username=username_var, password=password_var)
        usuario_insertado = UsuarioDAO.insertar(usuario)
        log.info(f'Usuario insertado: {usuario_insertado}')
    elif opcion == 3:
        id_usuario_var = int(input('Ingrese el id_usuario: '))
        username_var = input('Ingrese el username: ')
        password_var = input('Ingrese el password: ')
        usuario = Usuario(id_usuario=id_usuario_var, username=username_var, password=password_var)
        usuario_actualizado = UsuarioDAO.actualizar(usuario)
        log.info(f'Usuario actualizado: {usuario_actualizado}')
    elif opcion == 4:
        id_usuario_var = int(input('Ingrese el id_usuario: '))
        usuario = Usuario(id_usuario=id_usuario_var)
        usuario_eliminado = UsuarioDAO.eliminar(usuario)
        log.info(f'Usuario eliminado: {usuario_eliminado}')
    else:
        log.info('Salimos del programa')
    