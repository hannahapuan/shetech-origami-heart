// example
// mouse press to drag nodes around
var cp = new CreasePattern();
// step 1
// cp.crease(1, 1, 0, 0).valley();
// cp.crease(0, 1, 1, 0).valley();

//step 2
cp.crease(0.25, 1, 1, 0.25).valley();
cp.crease(0.5, 0, 0, 0.5).valley();

cp.crease(0.625, 0.625, 0.625, 1).mountain();
cp.crease(0.625, 0.625, 1, 0.625).mountain();
cp.crease(0.625, 0.625, 0, 0.625).valley();
cp.crease(0.625, 0.625, 0.625, 0.0).valley();

cp.crease(0.625, 0.15, 0.5, 0).mountain();
cp.crease(0.625, 0.15, 0.75, 0).valley();

cp.crease(0, 0.5, 0.125, 0.625).mountain();
cp.crease(0, 0.75, 0.125, 0.625).valley();

cp.crease(0, 0.9, 0.1, 1).mountain();
cp.crease(0.9, 0, 1, 0.1).mountain();
var origami = new OrigamiPaper("canvas-cp", cp);
var folded = new OrigamiFold("canvas-folded", cp);

// origami.load("../../files/svg/komatsu-minotaur.svg", function(cp){
// 	folded.cp = cp;
// 	folded.draw();
// 	origami.draw();
// })

origami.show.nodes = true;
origami.show.boundary = false;
origami.style.node.fillColor = { alpha: 0.0 };
origami.style.node.radius = 0.02;
origami.draw();

origami.onMouseMove = function(event) {
  origami.update();
  origami.nearest = origami.cp.nearest(event.point);
  origami.get(origami.nearest.node).fillColor = this.styles.byrne.yellow;
  if (origami.selected) {
    origami.selected.x = event.point.x;
    origami.selected.y = event.point.y;
    folded.draw();
  }
};
origami.onMouseDown = function(event) {
  origami.selected = origami.nearest.node;
};
origami.onMouseUp = function() {
  origami.selected = undefined;
};
