
    // Definir la clase Cantante
    class Cantante {
      constructor(id, nombre, genero) {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
      }
    }

    // Instanciar objetos de la clase Cantante
    const cantantes = [
      new Cantante(1, "Shakira", "Pop"),
      new Cantante(2, "Freddie Mercury", "Rock"),
      new Cantante(3, "Beyoncé", "R&B"),
      new Cantante(4, "Ed Sheeran", "Pop"),
      new Cantante(5, "Adele", "Pop")
    ];

    // Agregar los divs al body del documento
    const body = document.getElementsByTagName("body")[0];
    for (const cantante of cantantes) {
      const div = document.createElement("div");
      div.innerHTML = `<p>ID: ${cantante.id}</p>
                       <p>Nombre: ${cantante.nombre}</p>
                       <p>Género: ${cantante.genero}</p>
                       <button id="${cantante.id}" onclick="contratar(${cantante.id})">Contratar</button>`;
      body.appendChild(div);
    }

    // Función para el botón "Contratar"
    function contratar(id) {
      console.log(`Contratando al cantante con ID ${id}`);
    }

    // Convertir el array de cantantes a JSON
    const cantantesJSON = JSON.stringify(cantantes);
    console.log(cantantesJSON);

    // Convertir el JSON a array
    const cantantesArray = JSON.parse(cantantesJSON);
    console.log(cantantesArray);

