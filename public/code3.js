gdjs.OpenCode = {};
gdjs.OpenCode.localVariables = [];
gdjs.OpenCode.idToCallbackMap = new Map();
gdjs.OpenCode.GDNewSpriteObjects1= [];
gdjs.OpenCode.GDNewSpriteObjects2= [];
gdjs.OpenCode.GDPlayerObjects1= [];
gdjs.OpenCode.GDPlayerObjects2= [];
gdjs.OpenCode.GDEnemyObjects1= [];
gdjs.OpenCode.GDEnemyObjects2= [];
gdjs.OpenCode.GDTracerObjects1= [];
gdjs.OpenCode.GDTracerObjects2= [];
gdjs.OpenCode.GDEnemyTracerObjects1= [];
gdjs.OpenCode.GDEnemyTracerObjects2= [];
gdjs.OpenCode.GDPlayerHPObjects1= [];
gdjs.OpenCode.GDPlayerHPObjects2= [];
gdjs.OpenCode.GDPlayerHP2Objects1= [];
gdjs.OpenCode.GDPlayerHP2Objects2= [];
gdjs.OpenCode.GDPlayerHP3Objects1= [];
gdjs.OpenCode.GDPlayerHP3Objects2= [];
gdjs.OpenCode.GDGame_9595OverObjects1= [];
gdjs.OpenCode.GDGame_9595OverObjects2= [];
gdjs.OpenCode.GDTimeStopTintObjects1= [];
gdjs.OpenCode.GDTimeStopTintObjects2= [];
gdjs.OpenCode.GDHint_9595WObjects1= [];
gdjs.OpenCode.GDHint_9595WObjects2= [];
gdjs.OpenCode.GDNewTileMapObjects1= [];
gdjs.OpenCode.GDNewTileMapObjects2= [];
gdjs.OpenCode.GDDTObjects1= [];
gdjs.OpenCode.GDDTObjects2= [];
gdjs.OpenCode.GDNewTiledSpriteObjects1= [];
gdjs.OpenCode.GDNewTiledSpriteObjects2= [];
gdjs.OpenCode.GDSkillCardObjects1= [];
gdjs.OpenCode.GDSkillCardObjects2= [];
gdjs.OpenCode.GDYLObjects1= [];
gdjs.OpenCode.GDYLObjects2= [];
gdjs.OpenCode.GDNewLight9Objects1= [];
gdjs.OpenCode.GDNewLight9Objects2= [];
gdjs.OpenCode.GDAttackHitboxObjects1= [];
gdjs.OpenCode.GDAttackHitboxObjects2= [];
gdjs.OpenCode.GDLL77Objects1= [];
gdjs.OpenCode.GDLL77Objects2= [];
gdjs.OpenCode.GDCLObjects1= [];
gdjs.OpenCode.GDCLObjects2= [];
gdjs.OpenCode.GDSCDObjects1= [];
gdjs.OpenCode.GDSCDObjects2= [];
gdjs.OpenCode.GDSCD2Objects1= [];
gdjs.OpenCode.GDSCD2Objects2= [];
gdjs.OpenCode.GDSCD4Objects1= [];
gdjs.OpenCode.GDSCD4Objects2= [];
gdjs.OpenCode.GDSCD3Objects1= [];
gdjs.OpenCode.GDSCD3Objects2= [];
gdjs.OpenCode.GDoptionObjects1= [];
gdjs.OpenCode.GDoptionObjects2= [];
gdjs.OpenCode.GDWhite1BitSquareSliderBorderObjects1= [];
gdjs.OpenCode.GDWhite1BitSquareSliderBorderObjects2= [];
gdjs.OpenCode.GDWhite1BitSquareSliderBorder2Objects1= [];
gdjs.OpenCode.GDWhite1BitSquareSliderBorder2Objects2= [];
gdjs.OpenCode.GD_9538899_9525928Objects1= [];
gdjs.OpenCode.GD_9538899_9525928Objects2= [];
gdjs.OpenCode.GD_9538899_9527138Objects1= [];
gdjs.OpenCode.GD_9538899_9527138Objects2= [];
gdjs.OpenCode.GDEObjects1= [];
gdjs.OpenCode.GDEObjects2= [];
gdjs.OpenCode.GDquitBTN1Objects1= [];
gdjs.OpenCode.GDquitBTN1Objects2= [];
gdjs.OpenCode.GD_9532380_9532396Objects1= [];
gdjs.OpenCode.GD_9532380_9532396Objects2= [];


gdjs.OpenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("繼續"), gdjs.OpenCode.GD_9532380_9532396Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "1");
}
{for(var i = 0, len = gdjs.OpenCode.GD_9532380_9532396Objects1.length ;i < len;++i) {
    gdjs.OpenCode.GD_9532380_9532396Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "1") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("繼續"), gdjs.OpenCode.GD_9532380_9532396Objects1);
{for(var i = 0, len = gdjs.OpenCode.GD_9532380_9532396Objects1.length ;i < len;++i) {
    gdjs.OpenCode.GD_9532380_9532396Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "1") > 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, null);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "1") > 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}
}

}


};

gdjs.OpenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpenCode.GDNewSpriteObjects1.length = 0;
gdjs.OpenCode.GDNewSpriteObjects2.length = 0;
gdjs.OpenCode.GDPlayerObjects1.length = 0;
gdjs.OpenCode.GDPlayerObjects2.length = 0;
gdjs.OpenCode.GDEnemyObjects1.length = 0;
gdjs.OpenCode.GDEnemyObjects2.length = 0;
gdjs.OpenCode.GDTracerObjects1.length = 0;
gdjs.OpenCode.GDTracerObjects2.length = 0;
gdjs.OpenCode.GDEnemyTracerObjects1.length = 0;
gdjs.OpenCode.GDEnemyTracerObjects2.length = 0;
gdjs.OpenCode.GDPlayerHPObjects1.length = 0;
gdjs.OpenCode.GDPlayerHPObjects2.length = 0;
gdjs.OpenCode.GDPlayerHP2Objects1.length = 0;
gdjs.OpenCode.GDPlayerHP2Objects2.length = 0;
gdjs.OpenCode.GDPlayerHP3Objects1.length = 0;
gdjs.OpenCode.GDPlayerHP3Objects2.length = 0;
gdjs.OpenCode.GDGame_9595OverObjects1.length = 0;
gdjs.OpenCode.GDGame_9595OverObjects2.length = 0;
gdjs.OpenCode.GDTimeStopTintObjects1.length = 0;
gdjs.OpenCode.GDTimeStopTintObjects2.length = 0;
gdjs.OpenCode.GDHint_9595WObjects1.length = 0;
gdjs.OpenCode.GDHint_9595WObjects2.length = 0;
gdjs.OpenCode.GDNewTileMapObjects1.length = 0;
gdjs.OpenCode.GDNewTileMapObjects2.length = 0;
gdjs.OpenCode.GDDTObjects1.length = 0;
gdjs.OpenCode.GDDTObjects2.length = 0;
gdjs.OpenCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OpenCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OpenCode.GDSkillCardObjects1.length = 0;
gdjs.OpenCode.GDSkillCardObjects2.length = 0;
gdjs.OpenCode.GDYLObjects1.length = 0;
gdjs.OpenCode.GDYLObjects2.length = 0;
gdjs.OpenCode.GDNewLight9Objects1.length = 0;
gdjs.OpenCode.GDNewLight9Objects2.length = 0;
gdjs.OpenCode.GDAttackHitboxObjects1.length = 0;
gdjs.OpenCode.GDAttackHitboxObjects2.length = 0;
gdjs.OpenCode.GDLL77Objects1.length = 0;
gdjs.OpenCode.GDLL77Objects2.length = 0;
gdjs.OpenCode.GDCLObjects1.length = 0;
gdjs.OpenCode.GDCLObjects2.length = 0;
gdjs.OpenCode.GDSCDObjects1.length = 0;
gdjs.OpenCode.GDSCDObjects2.length = 0;
gdjs.OpenCode.GDSCD2Objects1.length = 0;
gdjs.OpenCode.GDSCD2Objects2.length = 0;
gdjs.OpenCode.GDSCD4Objects1.length = 0;
gdjs.OpenCode.GDSCD4Objects2.length = 0;
gdjs.OpenCode.GDSCD3Objects1.length = 0;
gdjs.OpenCode.GDSCD3Objects2.length = 0;
gdjs.OpenCode.GDoptionObjects1.length = 0;
gdjs.OpenCode.GDoptionObjects2.length = 0;
gdjs.OpenCode.GDWhite1BitSquareSliderBorderObjects1.length = 0;
gdjs.OpenCode.GDWhite1BitSquareSliderBorderObjects2.length = 0;
gdjs.OpenCode.GDWhite1BitSquareSliderBorder2Objects1.length = 0;
gdjs.OpenCode.GDWhite1BitSquareSliderBorder2Objects2.length = 0;
gdjs.OpenCode.GD_9538899_9525928Objects1.length = 0;
gdjs.OpenCode.GD_9538899_9525928Objects2.length = 0;
gdjs.OpenCode.GD_9538899_9527138Objects1.length = 0;
gdjs.OpenCode.GD_9538899_9527138Objects2.length = 0;
gdjs.OpenCode.GDEObjects1.length = 0;
gdjs.OpenCode.GDEObjects2.length = 0;
gdjs.OpenCode.GDquitBTN1Objects1.length = 0;
gdjs.OpenCode.GDquitBTN1Objects2.length = 0;
gdjs.OpenCode.GD_9532380_9532396Objects1.length = 0;
gdjs.OpenCode.GD_9532380_9532396Objects2.length = 0;

gdjs.OpenCode.eventsList0(runtimeScene);
gdjs.OpenCode.GDNewSpriteObjects1.length = 0;
gdjs.OpenCode.GDNewSpriteObjects2.length = 0;
gdjs.OpenCode.GDPlayerObjects1.length = 0;
gdjs.OpenCode.GDPlayerObjects2.length = 0;
gdjs.OpenCode.GDEnemyObjects1.length = 0;
gdjs.OpenCode.GDEnemyObjects2.length = 0;
gdjs.OpenCode.GDTracerObjects1.length = 0;
gdjs.OpenCode.GDTracerObjects2.length = 0;
gdjs.OpenCode.GDEnemyTracerObjects1.length = 0;
gdjs.OpenCode.GDEnemyTracerObjects2.length = 0;
gdjs.OpenCode.GDPlayerHPObjects1.length = 0;
gdjs.OpenCode.GDPlayerHPObjects2.length = 0;
gdjs.OpenCode.GDPlayerHP2Objects1.length = 0;
gdjs.OpenCode.GDPlayerHP2Objects2.length = 0;
gdjs.OpenCode.GDPlayerHP3Objects1.length = 0;
gdjs.OpenCode.GDPlayerHP3Objects2.length = 0;
gdjs.OpenCode.GDGame_9595OverObjects1.length = 0;
gdjs.OpenCode.GDGame_9595OverObjects2.length = 0;
gdjs.OpenCode.GDTimeStopTintObjects1.length = 0;
gdjs.OpenCode.GDTimeStopTintObjects2.length = 0;
gdjs.OpenCode.GDHint_9595WObjects1.length = 0;
gdjs.OpenCode.GDHint_9595WObjects2.length = 0;
gdjs.OpenCode.GDNewTileMapObjects1.length = 0;
gdjs.OpenCode.GDNewTileMapObjects2.length = 0;
gdjs.OpenCode.GDDTObjects1.length = 0;
gdjs.OpenCode.GDDTObjects2.length = 0;
gdjs.OpenCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OpenCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OpenCode.GDSkillCardObjects1.length = 0;
gdjs.OpenCode.GDSkillCardObjects2.length = 0;
gdjs.OpenCode.GDYLObjects1.length = 0;
gdjs.OpenCode.GDYLObjects2.length = 0;
gdjs.OpenCode.GDNewLight9Objects1.length = 0;
gdjs.OpenCode.GDNewLight9Objects2.length = 0;
gdjs.OpenCode.GDAttackHitboxObjects1.length = 0;
gdjs.OpenCode.GDAttackHitboxObjects2.length = 0;
gdjs.OpenCode.GDLL77Objects1.length = 0;
gdjs.OpenCode.GDLL77Objects2.length = 0;
gdjs.OpenCode.GDCLObjects1.length = 0;
gdjs.OpenCode.GDCLObjects2.length = 0;
gdjs.OpenCode.GDSCDObjects1.length = 0;
gdjs.OpenCode.GDSCDObjects2.length = 0;
gdjs.OpenCode.GDSCD2Objects1.length = 0;
gdjs.OpenCode.GDSCD2Objects2.length = 0;
gdjs.OpenCode.GDSCD4Objects1.length = 0;
gdjs.OpenCode.GDSCD4Objects2.length = 0;
gdjs.OpenCode.GDSCD3Objects1.length = 0;
gdjs.OpenCode.GDSCD3Objects2.length = 0;
gdjs.OpenCode.GDoptionObjects1.length = 0;
gdjs.OpenCode.GDoptionObjects2.length = 0;
gdjs.OpenCode.GDWhite1BitSquareSliderBorderObjects1.length = 0;
gdjs.OpenCode.GDWhite1BitSquareSliderBorderObjects2.length = 0;
gdjs.OpenCode.GDWhite1BitSquareSliderBorder2Objects1.length = 0;
gdjs.OpenCode.GDWhite1BitSquareSliderBorder2Objects2.length = 0;
gdjs.OpenCode.GD_9538899_9525928Objects1.length = 0;
gdjs.OpenCode.GD_9538899_9525928Objects2.length = 0;
gdjs.OpenCode.GD_9538899_9527138Objects1.length = 0;
gdjs.OpenCode.GD_9538899_9527138Objects2.length = 0;
gdjs.OpenCode.GDEObjects1.length = 0;
gdjs.OpenCode.GDEObjects2.length = 0;
gdjs.OpenCode.GDquitBTN1Objects1.length = 0;
gdjs.OpenCode.GDquitBTN1Objects2.length = 0;
gdjs.OpenCode.GD_9532380_9532396Objects1.length = 0;
gdjs.OpenCode.GD_9532380_9532396Objects2.length = 0;


return;

}

gdjs['OpenCode'] = gdjs.OpenCode;
