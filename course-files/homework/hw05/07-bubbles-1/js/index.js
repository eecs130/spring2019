paper.install(window)
paper.setup('myCanvas')
const screenW = view.size.width
const screenH = view.size.height
const random = (min, max) => {
  const num = Math.random() * (max - min) + min
  return num
}

var makeBubble = () => {
  var x = random(0, screenW) // some number between zero and the screen width
  var y = random(0, screenH) // some number between zero and the screen height
  var r = random(5, 40)      // some number between 5 and 40
  var bubble = new Path.Circle({
    center: new Point(x, y),
    radius: r,
    strokeColor: '#FFF'
  })
  return bubble
}

/* TODO: instead of repeating makeBubble();
   over and over again, use a loop to repeat it
   as many times as you like.
*/
makeBubble()
makeBubble()
makeBubble()
makeBubble()
makeBubble()
makeBubble()

view.draw()