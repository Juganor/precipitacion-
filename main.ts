let Cant_agua = 0
let Promedio = 0
input.onButtonPressed(Button.A, function () {
    // Se establece la variable Cant_Agua en cero
    Cant_agua = 0
    // Establecer la variable promedio en cero
    Promedio = 0
    // Se toma un valor al azar entre 1 y 6, esto se repite 1825 veces qie son los dias que tienen 5 años, la sumatoria de los valores se van guardando en la vasiable Cant_agua
    for (let index = 0; index < 1825; index++) {
        Cant_agua += randint(1, 6)
    }
    basic.showString("C.AG.")
    // Mostrar la cantidad de agua en los 1825 dias
    basic.showNumber(Cant_agua)
    // Calculo el promedio dividiendo la cant_agua entre los 1825 dias y lo guardo en la variable promedio
    Promedio = Cant_agua / 1825
    basic.showString("PRO.")
    // Muestro el promedio de agua en los 1825 dias
    basic.showNumber(Promedio)
    if (Promedio < 3.4) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                `)
        }
        basic.showString("PA")
    } else if (Promedio > 3.5) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # . . . #
                # . # . #
                # . # . #
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # . . . #
                # . # . #
                # . # . #
                . . # . .
                `)
        }
        basic.showString("MA")
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # . . . #
                . . # . .
                # . . . #
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # . . . #
                . . # . .
                # . . . #
                . . # . .
                `)
        }
        basic.showString("NOR")
    }
    basic.showIcon(IconNames.No)
    basic.pause(1000)
})
