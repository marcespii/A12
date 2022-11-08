input.onButtonPressed(Button.A, function () {
    objeto.move(1)
    objeto.ifOnEdgeBounce()
})
input.onButtonPressed(Button.B, function () {
    objeto.turn(Direction.Right, randint(0, 4) * 45)
})
let objeto: game.LedSprite = null
objeto = game.createSprite(2, 2)
basic.forever(function () {
    while (true) {
        objeto.move(2)
        objeto.ifOnEdgeBounce()
        objeto.turn(Direction.Right, randint(0, 4) * 45)
        basic.pause(500)
    }
})
