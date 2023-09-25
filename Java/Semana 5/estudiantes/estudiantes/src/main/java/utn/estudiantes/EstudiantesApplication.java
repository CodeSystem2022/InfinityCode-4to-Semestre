package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2022;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.List;
import java.util.Scanner;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {
	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

	String nl= System.lineSeparator();

	public static void main(String[] args) {
		logger.info("Iniciando la aplicación...");
		//Levantar la fabrica de Spring
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Aplicacion finalizada");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info(nl+"Ejecutando el método run de Spring"+nl);
		var salir = false;
		var consola = new Scanner(System.in);
		while(!salir){
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);
		}//Fin ciclo while
	}
	private void mostrarMenu(){
		//logger.info(nl);
		logger.info("""
    			****** Sistema de Estudiantes ******
    			1. Listar Estudiantes
    			2. Buscar Estudiante
    			3. Agregar Estudiante
    			4. Modificar Estudiante
    			5. Eliminar Estudiante
    			6. Salir
				Elija una opción:""");
	}
	private  boolean ejecutarOpciones(Scanner console){
		try {
			var opcion = Integer.parseInt(console.nextLine());
				var salir = false;
				switch (opcion){
					case 1 ->{ //Listar estudiante
						logger.info(nl+"Listado de estudiantes: "+nl);
						List<Estudiantes2022> estudiantes = estudianteServicio.ListarEstudiante();
						estudiantes.forEach(estudiante -> logger.info(estudiante.toString()+nl));
					}
					case 2 ->{//Buscar estudiante por id
						logger.info("Digite el id estudiante a buscar: ");
						var idEstudiante = Integer.parseInt(console.nextLine());
						Estudiantes2022 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
						if (estudiante != null)
							logger.info("Estudiante encontrado: "+estudiante+nl);
						else
							logger.info("Estudiante NO encontrado: "+estudiante+nl);
					}
					case 3 ->{ //Agregar estudiante
						logger.info("Agregar estudiante: "+nl);
						logger.info("Nombre: ");
						var nombre = console.nextLine();
						logger.info("Apellido: ");
						var apellido = console.nextLine();
						logger.info("Telefono: ");
						var telefono = console.nextLine();
						logger.info("Email: ");
						var email = console.nextLine();

						// Crear el objeto estudiante sin el id
						var estudiante = new Estudiantes2022();
						estudiante.setNombre(nombre);
						estudiante.setApellido(apellido);
						estudiante.setTelefono(telefono);
						estudiante.setEmail(email);
						estudianteServicio.guardarEstudiante(estudiante);
						logger.info("Estudiante agregado: "+estudiante+nl);
					}
					case 4 ->{// Modificar estudiante
						logger.info("Modificar estudiante: "+nl);
						logger.info("Ingrese el id estudiante: ");
						var idEstudiante = Integer.parseInt(console.nextLine());
						// Buscamos el estudiante a modificar
						Estudiantes2022 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
						if(estudiante != null){
							logger.info("Nombre: ");
							var nombre = console.nextLine();
							logger.info("Apellido: ");
							var apellido = console.nextLine();
							logger.info("Telefono: ");
							var telefono = console.nextLine();
							logger.info("Email: ");
							var email = console.nextLine();
							estudiante.setNombre(nombre);
							estudiante.setApellido(apellido);
							estudiante.setTelefono(telefono);
							estudiante.setEmail(email);
							estudianteServicio.guardarEstudiante(estudiante);
							logger.info("Estudiante modificado: "+estudiante+nl);
						}else
							logger.info("Estudiante NO encontrado: "+idEstudiante+nl);
					}
					case 5 ->{ //Eliminar estudiante
						logger.info("Eliminar estudiante: "+nl);
						logger.info("Digite el id estudiante: ");
						var idEstudiante = Integer.parseInt(console.nextLine());
						//Buscamos el id estudiante a eliminar
						var estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
						if (estudiante !=null){
							estudianteServicio.eliminarEstudiante(estudiante);
							logger.info("Estudiante eliminado: "+estudiante+nl);
						}else
							logger.info("Estudiante NO eliminado con id: "+idEstudiante+nl);
					}
					case 6 ->{ //Salir
						logger.info("Hasta pronto!"+nl+nl);
						salir = true;
					}
					default -> logger.info("Opción incorrecta: "+opcion+nl);
				}//Fin switch
				return salir;
		}catch (Exception e) {

			logger.info("Opción incorrecta: " + e.getMessage());
		}
		return false;
	}//Fin método ejecutarOpciones
}//Fin clase EstudiantesApplication
