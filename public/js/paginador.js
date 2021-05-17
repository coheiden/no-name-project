

    function cargarTotalDatosEventos() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                
                botonesPaginadorEventos(JSON.parse(this.responseText));

            }else if (this.status == 403) {
                
                window.location.href = "../login.html";

            }
        });

        xhttp.open("GET", "../src/total_eventos.php", true);
        xhttp.send();

    }



    function botonesPaginadorEventos(total){
        
        let ul = document.getElementById("ul-paginador");
        ul.innerHTML = " ";
        let li_inicio = document.createElement("li");
        li_inicio.className = "page-item click";

        ul.appendChild(li_inicio);

        let span_laquao = document.createElement("span");
        span_laquao.innerHTML = "&laquo;";

        let a_inicio = document.createElement("a");
        a_inicio.className = "page-link click";
        
        li_inicio.appendChild(a_inicio);

        a_inicio.appendChild(span_laquao);

        a_inicio.addEventListener("click", function(){
            
            cargarDatosEventos(0);
            

        })
        total = Math.ceil(total["COUNT(id_acto)"] / 10)

        for(let i = 0 ; i < total; i ++){
            let li_simple = document.createElement("li");
            li_simple.className = "page-item click";
            let a_simple = document.createElement("a");
            a_simple.className = "page-link click";
            a_simple.innerHTML = i+1;

            a_simple.addEventListener("click", function(){

                cargarDatosEventos(i);

            })

            li_simple.appendChild(a_simple)
            ul.appendChild(li_simple);

        }

        let li_final = document.createElement("li");
        li_final.className = "page-item click";

        let a_final = document.createElement("a");
        a_final.className = "page-link click";
        let span_laquao2 = document.createElement("span");
        span_laquao2.innerHTML = "&raquo;";

        li_final.appendChild(a_final);

        a_final.addEventListener("click", function(){

            cargarDatosEventos(total - 1);

        })
        a_final.appendChild(span_laquao2);
        ul.appendChild(li_final);

    }   


    function cargarTotalDatosAdmins() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                
                botonesPaginadorAdmin(JSON.parse(this.responseText));

            }else if (this.status == 403) {
                
                window.location.href = "../login.html";

            }
        });

        xhttp.open("GET", "../src/total_admins.php", true);
        xhttp.send();

    }

    function botonesPaginadorAdmin(total){
        
        let ul = document.getElementById("ul-paginador");
        ul.innerHTML = " ";
        let li_inicio = document.createElement("li");
        li_inicio.className = "page-item";

        ul.appendChild(li_inicio);

        let span_laquao = document.createElement("span");
        span_laquao.innerHTML = "&laquo; ";

        let a_inicio = document.createElement("a");
        a_inicio.className = "page-link click";
        
        li_inicio.appendChild(a_inicio);

        a_inicio.appendChild(span_laquao);

        a_inicio.addEventListener("click", function(){
            
            cargarDatosAdmins(0);
            

        })
        total = Math.ceil(total["COUNT(id_administrador)"] / 10)

        for(let i = 0 ; i < total; i ++){
            let li_simple = document.createElement("li");
            li_simple.className = "page-item";
            let a_simple = document.createElement("a");
            a_simple.className = "page-link click";
            a_simple.innerHTML = i+1;

            a_simple.addEventListener("click", function(){

                cargarDatosAdmins(i);

            })

            li_simple.appendChild(a_simple)
            ul.appendChild(li_simple);

        }

        let li_final = document.createElement("li");
        li_final.className = "page-item";

        let a_final = document.createElement("a");
        a_final.className = "page-link click";
        let span_laquao2 = document.createElement("span");
        span_laquao2.innerHTML = "&raquo;";

        li_final.appendChild(a_final);

        a_final.addEventListener("click", function(){

            cargarDatosAdmins(total - 1);

        })
        a_final.appendChild(span_laquao2);
        ul.appendChild(li_final);

    }   



    function cargarTotalDatosAsistentes() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                
                botonesPaginadorAsistentes(JSON.parse(this.responseText));

            }else if (this.status == 403) {
                
                window.location.href = "../login.html";

            }
        });

        xhttp.open("GET", "../src/total_asistentes.php", true);
        xhttp.send();

    }

    function botonesPaginadorAsistentes(total){
        

        total = Math.ceil(total["COUNT(id_asistente)"] / 10)

        
        let ul = document.getElementById("ul-paginador");
        ul.innerHTML = " ";

        let li_inicio = document.createElement("li");
        li_inicio.className = "page-item click";

        ul.appendChild(li_inicio);

        let span_laquao = document.createElement("span");
        span_laquao.innerHTML = "&laquo;";

        let a_inicio = document.createElement("a");
        a_inicio.className = "page-link click";
        
        li_inicio.appendChild(a_inicio);

        a_inicio.appendChild(span_laquao);

        a_inicio.addEventListener("click", function(){
            
            cargarDatosAsistentes(0);
            

        })

        for(let i = 0 ; i < total; i ++){

            let li_simple = document.createElement("li");
            li_simple.className = "page-item";
            let a_simple = document.createElement("a");
            a_simple.className = "page-link click";
            a_simple.innerHTML = i+1;

            a_simple.addEventListener("click", function(){

                cargarDatosAsistentes(i);

            })

            li_simple.appendChild(a_simple)
            ul.appendChild(li_simple);

        }

        let li_final = document.createElement("li");
        li_final.className = "page-item click";

        let a_final = document.createElement("a");
        a_final.className = "page-link click";
        let span_laquao2 = document.createElement("span");
        span_laquao2.innerHTML = "&raquo;";

        li_final.appendChild(a_final);

        a_final.addEventListener("click", function(){
            
            cargarDatosAsistentes(total - 1);
            

        })

        a_final.appendChild(span_laquao2);
        ul.appendChild(li_final);


    }   