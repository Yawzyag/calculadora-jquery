//inicia al cargar la pagina
$(document).ready(function () {

    //operaciones globales
    var num = $("#num");
    var mem = 0;
    var op = "";

    //borra el contenido del cajetin al hacer click dentro
    num.click(function () {
        num.text("");
    });

    //uso del boton c para borrar el cajetin
    $("#borrar").click(function () {
        mem = 0;
        num.text("");
        $("#memoria").text("");
    });

    //enviar a memoria el contenido del cajetin
    function toM() {
        var valor = num.text();
        if (isNaN(valor)) {
            alert("Ingresa un numero valido!");
            $("#memoria").text("");
        } else {
            $("#memoria").text(valor);
        }
    }

    //traer el contenido de memoria al cajetin
    function fromM() {
        var valor = $("#memoria").text();
        $("#num").text(valor);
    }

    //suma
    $("#mas").on("click",
        function () {
            mem = num.text();
            op = "+";
        }
    );
    //resta
    $("#menos").on("click",
        function () {
            mem = num.text();
            op = "-";
        }
    );
    //multiplicar
    $("#multiplicacion").on("click",
        function () {
            mem = num.text();
            op = "*";
        }
    );

    //division
    $("#division").on("click",
        function () {
            mem = num.text();
            op = "/";
        }
    );

    //elevado a...
    $("#elevado").on("click",
        function () {
            mem = num.text();
            op = "^";
        }
    );

    //cuadrado del numero
    $("#cuadrado").on("click",
        function () {
            num.text((+num.text()) * (+num.text()));
            toM();
        }
    );

    //inverso
    $("#inverso").on("click",
        function () {
            num.text(1 / (+num.text()));
            toM();
        }
    );

    //raiz
    $("#raiz").on("click",
        function () {
            num.text(Math.sqrt(num.text()));
            toM();
        }
    );

    //Entero
    $("#entero").on("click",
        function () {
            if (+num.text() < 0) {
                num.text(Math.ceil(+num.text()));
            } else {
                num.text(Math.floor(+num.text()));
            }
            toM();
        }
    );

    $("#exp2").on("click",
        function () {
            var n = +num.text();
            for (var total = 1; n !== 0; n--) {
                total = total * 2;
            }
            num.text(total);
            toM();
        }
    );

    $("#nfactorial").on("click",
        function () {
            var total = 1;
            var n = +num.text();
            while (n !== 0) {
                total = total * n;
                n--;
            }
            num.text(total);
            toM();
        }
    );

    //al hacer click envia el contenido a la memoria
    $("#toM").on("click",
        function () {
            toM();
        }
    );
    //al hacer click envia el contenido de la memoria al cajetin
    $("#fromM").on("click",
        function () {
            fromM();
        }
    );
    //dragable
    $("#num").draggable({
        revert: true,
        opacity: 0.7,
        delay: 150,
        helper: "clone",
        revertDuration: 250,
        scope: "default",
        zIndex: 99,
        distance: 1
    });
    $("#memoria").draggable({
        revert: true,
        opacity: 0.7,
        delay: 150,
        helper: "clone",
        revertDuration: 250,
        scope: "default",
        zIndex: 99,
        distance: 1
    });
    //droppable
    $("#num").droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        greedy: true,
        tolerance: "pointer", // "intersect"
        drop: function (event, ui) {
            var valor = $("#memoria").text();
            $(this)
                .html(valor);
        }
    });
    $("#memoria").droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        greedy: true,
        tolerance: "pointer", // "intersect"
        drop: function (event, ui) {
            var valor = $("#num").text();
            $(this)
                .html(valor);
        }
    });

    //calcular
    $("#calcular").on("click",
        function () {
            if (isNaN(num.text())) {
                alert("Ingresa un numero valido!");
                num.text("");
            } else if (op === "+") {
                num.text(+mem + (+num.text()));
            } else if (op === "-") {
                num.text(+mem - (+num.text()));
            } else if (op === "*") {
                num.text(+mem * (+num.text()));
            } else if (op === "/") {
                num.text((+mem) / (+num.text()));
            } else if (op === "^") {
                num.text(Math.pow((+mem), +num.text()));
            }
            toM();
        }
    );

    $("#sumatoria").on("click",
        function () {
            var lista = num.text().split(",");
            var i = 0;
            var total = 0;

            while (i < lista.length) {
                total = total + (+lista[i]);
                i++;
            }
            num.text(total);
            toM();
        }
    );

    $("#producto").on("click",
        function () {
            var lista = num.text().split(",");
            var i = 0;
            var total = 1;

            while (i < lista.length) {
                total = total * (+lista[i]);
                i++;
            }
            num.text(total);
            toM();
        }
    );
});