// originally posted on my other account (EXFTB)

let Enabled = true

const oldFunction = Runner.instance_.gameOver
Runner.instance_.gameOver = function() {
    if (Enabled) {
        Runner.instance_.tRex.startJump(1)
    } else {
        oldFunction.call(Runner.instance_)
    }
}

addEventListener("keydown", function(Input) {
    if (Input.code == "KeyZ") {
        if (Enabled) {
            Enabled = false
        } else {
            Enabled = true
        }
    }
})
