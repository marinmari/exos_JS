function pyramideMario() {
  numberOfStage = prompt("Combien d'étages ??");
  let stage = "#";
  let i = 0;


    for (x = 1; x <= numberOfStage - 1; x++) {
      stage = " " + stage;
    }
    console.log(stage);
    
    for (x = 1; x <=numberOfStage - 1; x++){
      stage = stage.replace(" #", "##");
      console.log(stage)
    }
}
pyramideMario()