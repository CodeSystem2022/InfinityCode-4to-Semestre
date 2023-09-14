class Usuario:
    def __init__(self, id_usuario=None, username=None, password=None):
        # Trabajaremos con diferentes contructores, de modo que dejaremos valores en none
        # Agregamos cada uno de sus atributos
        # Encapsulamos
        self.id_usuario = id_usuario
        self.username = username
        self.password = password

    def __str__(self):
        return f'Usuario: {self._id_usuario} Username: {self._username} Password: {self._password}'
        # visualizar como cadena

    # Getters y Setters para cada uno de sus atributos
    @property
    def id_usuario(self):
        return self._id_usuario
    
    @id_usuario.setter
    def id_usuario(self, id_usuario):
        self._id_usuario = id_usuario

    @property
    def username(self):
        return self._username
    
    @username.setter
    def username(self, username):
        self._username = username

    @property
    def password(self):
        return self._password
    
    @password.setter
    def password(self, password):
        self._password = password
