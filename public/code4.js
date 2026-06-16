gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.idToCallbackMap = new Map();
gdjs.EndCode.GDNewSpriteObjects1= [];
gdjs.EndCode.GDNewSpriteObjects2= [];
gdjs.EndCode.GD_9532380_95323962Objects1= [];
gdjs.EndCode.GD_9532380_95323962Objects2= [];
gdjs.EndCode.GDPlayerObjects1= [];
gdjs.EndCode.GDPlayerObjects2= [];
gdjs.EndCode.GDEnemyObjects1= [];
gdjs.EndCode.GDEnemyObjects2= [];
gdjs.EndCode.GDTracerObjects1= [];
gdjs.EndCode.GDTracerObjects2= [];
gdjs.EndCode.GDEnemyTracerObjects1= [];
gdjs.EndCode.GDEnemyTracerObjects2= [];
gdjs.EndCode.GDPlayerHPObjects1= [];
gdjs.EndCode.GDPlayerHPObjects2= [];
gdjs.EndCode.GDPlayerHP2Objects1= [];
gdjs.EndCode.GDPlayerHP2Objects2= [];
gdjs.EndCode.GDPlayerHP3Objects1= [];
gdjs.EndCode.GDPlayerHP3Objects2= [];
gdjs.EndCode.GDGame_9595OverObjects1= [];
gdjs.EndCode.GDGame_9595OverObjects2= [];
gdjs.EndCode.GDTimeStopTintObjects1= [];
gdjs.EndCode.GDTimeStopTintObjects2= [];
gdjs.EndCode.GDHint_9595WObjects1= [];
gdjs.EndCode.GDHint_9595WObjects2= [];
gdjs.EndCode.GDNewTileMapObjects1= [];
gdjs.EndCode.GDNewTileMapObjects2= [];
gdjs.EndCode.GDDTObjects1= [];
gdjs.EndCode.GDDTObjects2= [];
gdjs.EndCode.GDNewTiledSpriteObjects1= [];
gdjs.EndCode.GDNewTiledSpriteObjects2= [];
gdjs.EndCode.GDSkillCardObjects1= [];
gdjs.EndCode.GDSkillCardObjects2= [];
gdjs.EndCode.GDYLObjects1= [];
gdjs.EndCode.GDYLObjects2= [];
gdjs.EndCode.GDNewLight9Objects1= [];
gdjs.EndCode.GDNewLight9Objects2= [];
gdjs.EndCode.GDAttackHitboxObjects1= [];
gdjs.EndCode.GDAttackHitboxObjects2= [];
gdjs.EndCode.GDLL77Objects1= [];
gdjs.EndCode.GDLL77Objects2= [];
gdjs.EndCode.GDCLObjects1= [];
gdjs.EndCode.GDCLObjects2= [];
gdjs.EndCode.GDSCDObjects1= [];
gdjs.EndCode.GDSCDObjects2= [];
gdjs.EndCode.GDSCD2Objects1= [];
gdjs.EndCode.GDSCD2Objects2= [];
gdjs.EndCode.GDSCD4Objects1= [];
gdjs.EndCode.GDSCD4Objects2= [];
gdjs.EndCode.GDSCD3Objects1= [];
gdjs.EndCode.GDSCD3Objects2= [];
gdjs.EndCode.GDoptionObjects1= [];
gdjs.EndCode.GDoptionObjects2= [];
gdjs.EndCode.GDWhite1BitSquareSliderBorderObjects1= [];
gdjs.EndCode.GDWhite1BitSquareSliderBorderObjects2= [];
gdjs.EndCode.GDWhite1BitSquareSliderBorder2Objects1= [];
gdjs.EndCode.GDWhite1BitSquareSliderBorder2Objects2= [];
gdjs.EndCode.GD_9538899_9525928Objects1= [];
gdjs.EndCode.GD_9538899_9525928Objects2= [];
gdjs.EndCode.GD_9538899_9527138Objects1= [];
gdjs.EndCode.GD_9538899_9527138Objects2= [];
gdjs.EndCode.GDEObjects1= [];
gdjs.EndCode.GDEObjects2= [];
gdjs.EndCode.GDquitBTN1Objects1= [];
gdjs.EndCode.GDquitBTN1Objects2= [];
gdjs.EndCode.GD_9532380_9532396Objects1= [];
gdjs.EndCode.GD_9532380_9532396Objects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("繼續2"), gdjs.EndCode.GD_9532380_95323962Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "1");
}
{for(var i = 0, len = gdjs.EndCode.GD_9532380_95323962Objects1.length ;i < len;++i) {
    gdjs.EndCode.GD_9532380_95323962Objects1[i].hide();
}
}
{gdjs.evtTools.network.sendAsyncRequest("http://s1411322038gameserver.onrender.com/hiscore?clearTime=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))), "", "GET", "application/json", runtimeScene.getScene().getVariables().get("ServerResponse"), runtimeScene.getScene().getVariables().get("ServerError"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "1") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("繼續2"), gdjs.EndCode.GD_9532380_95323962Objects1);
{for(var i = 0, len = gdjs.EndCode.GD_9532380_95323962Objects1.length ;i < len;++i) {
    gdjs.EndCode.GD_9532380_95323962Objects1[i].hide(false);
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
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Finish", false);
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Finish", false);
}
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDNewSpriteObjects1.length = 0;
gdjs.EndCode.GDNewSpriteObjects2.length = 0;
gdjs.EndCode.GD_9532380_95323962Objects1.length = 0;
gdjs.EndCode.GD_9532380_95323962Objects2.length = 0;
gdjs.EndCode.GDPlayerObjects1.length = 0;
gdjs.EndCode.GDPlayerObjects2.length = 0;
gdjs.EndCode.GDEnemyObjects1.length = 0;
gdjs.EndCode.GDEnemyObjects2.length = 0;
gdjs.EndCode.GDTracerObjects1.length = 0;
gdjs.EndCode.GDTracerObjects2.length = 0;
gdjs.EndCode.GDEnemyTracerObjects1.length = 0;
gdjs.EndCode.GDEnemyTracerObjects2.length = 0;
gdjs.EndCode.GDPlayerHPObjects1.length = 0;
gdjs.EndCode.GDPlayerHPObjects2.length = 0;
gdjs.EndCode.GDPlayerHP2Objects1.length = 0;
gdjs.EndCode.GDPlayerHP2Objects2.length = 0;
gdjs.EndCode.GDPlayerHP3Objects1.length = 0;
gdjs.EndCode.GDPlayerHP3Objects2.length = 0;
gdjs.EndCode.GDGame_9595OverObjects1.length = 0;
gdjs.EndCode.GDGame_9595OverObjects2.length = 0;
gdjs.EndCode.GDTimeStopTintObjects1.length = 0;
gdjs.EndCode.GDTimeStopTintObjects2.length = 0;
gdjs.EndCode.GDHint_9595WObjects1.length = 0;
gdjs.EndCode.GDHint_9595WObjects2.length = 0;
gdjs.EndCode.GDNewTileMapObjects1.length = 0;
gdjs.EndCode.GDNewTileMapObjects2.length = 0;
gdjs.EndCode.GDDTObjects1.length = 0;
gdjs.EndCode.GDDTObjects2.length = 0;
gdjs.EndCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.EndCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.EndCode.GDSkillCardObjects1.length = 0;
gdjs.EndCode.GDSkillCardObjects2.length = 0;
gdjs.EndCode.GDYLObjects1.length = 0;
gdjs.EndCode.GDYLObjects2.length = 0;
gdjs.EndCode.GDNewLight9Objects1.length = 0;
gdjs.EndCode.GDNewLight9Objects2.length = 0;
gdjs.EndCode.GDAttackHitboxObjects1.length = 0;
gdjs.EndCode.GDAttackHitboxObjects2.length = 0;
gdjs.EndCode.GDLL77Objects1.length = 0;
gdjs.EndCode.GDLL77Objects2.length = 0;
gdjs.EndCode.GDCLObjects1.length = 0;
gdjs.EndCode.GDCLObjects2.length = 0;
gdjs.EndCode.GDSCDObjects1.length = 0;
gdjs.EndCode.GDSCDObjects2.length = 0;
gdjs.EndCode.GDSCD2Objects1.length = 0;
gdjs.EndCode.GDSCD2Objects2.length = 0;
gdjs.EndCode.GDSCD4Objects1.length = 0;
gdjs.EndCode.GDSCD4Objects2.length = 0;
gdjs.EndCode.GDSCD3Objects1.length = 0;
gdjs.EndCode.GDSCD3Objects2.length = 0;
gdjs.EndCode.GDoptionObjects1.length = 0;
gdjs.EndCode.GDoptionObjects2.length = 0;
gdjs.EndCode.GDWhite1BitSquareSliderBorderObjects1.length = 0;
gdjs.EndCode.GDWhite1BitSquareSliderBorderObjects2.length = 0;
gdjs.EndCode.GDWhite1BitSquareSliderBorder2Objects1.length = 0;
gdjs.EndCode.GDWhite1BitSquareSliderBorder2Objects2.length = 0;
gdjs.EndCode.GD_9538899_9525928Objects1.length = 0;
gdjs.EndCode.GD_9538899_9525928Objects2.length = 0;
gdjs.EndCode.GD_9538899_9527138Objects1.length = 0;
gdjs.EndCode.GD_9538899_9527138Objects2.length = 0;
gdjs.EndCode.GDEObjects1.length = 0;
gdjs.EndCode.GDEObjects2.length = 0;
gdjs.EndCode.GDquitBTN1Objects1.length = 0;
gdjs.EndCode.GDquitBTN1Objects2.length = 0;
gdjs.EndCode.GD_9532380_9532396Objects1.length = 0;
gdjs.EndCode.GD_9532380_9532396Objects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDNewSpriteObjects1.length = 0;
gdjs.EndCode.GDNewSpriteObjects2.length = 0;
gdjs.EndCode.GD_9532380_95323962Objects1.length = 0;
gdjs.EndCode.GD_9532380_95323962Objects2.length = 0;
gdjs.EndCode.GDPlayerObjects1.length = 0;
gdjs.EndCode.GDPlayerObjects2.length = 0;
gdjs.EndCode.GDEnemyObjects1.length = 0;
gdjs.EndCode.GDEnemyObjects2.length = 0;
gdjs.EndCode.GDTracerObjects1.length = 0;
gdjs.EndCode.GDTracerObjects2.length = 0;
gdjs.EndCode.GDEnemyTracerObjects1.length = 0;
gdjs.EndCode.GDEnemyTracerObjects2.length = 0;
gdjs.EndCode.GDPlayerHPObjects1.length = 0;
gdjs.EndCode.GDPlayerHPObjects2.length = 0;
gdjs.EndCode.GDPlayerHP2Objects1.length = 0;
gdjs.EndCode.GDPlayerHP2Objects2.length = 0;
gdjs.EndCode.GDPlayerHP3Objects1.length = 0;
gdjs.EndCode.GDPlayerHP3Objects2.length = 0;
gdjs.EndCode.GDGame_9595OverObjects1.length = 0;
gdjs.EndCode.GDGame_9595OverObjects2.length = 0;
gdjs.EndCode.GDTimeStopTintObjects1.length = 0;
gdjs.EndCode.GDTimeStopTintObjects2.length = 0;
gdjs.EndCode.GDHint_9595WObjects1.length = 0;
gdjs.EndCode.GDHint_9595WObjects2.length = 0;
gdjs.EndCode.GDNewTileMapObjects1.length = 0;
gdjs.EndCode.GDNewTileMapObjects2.length = 0;
gdjs.EndCode.GDDTObjects1.length = 0;
gdjs.EndCode.GDDTObjects2.length = 0;
gdjs.EndCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.EndCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.EndCode.GDSkillCardObjects1.length = 0;
gdjs.EndCode.GDSkillCardObjects2.length = 0;
gdjs.EndCode.GDYLObjects1.length = 0;
gdjs.EndCode.GDYLObjects2.length = 0;
gdjs.EndCode.GDNewLight9Objects1.length = 0;
gdjs.EndCode.GDNewLight9Objects2.length = 0;
gdjs.EndCode.GDAttackHitboxObjects1.length = 0;
gdjs.EndCode.GDAttackHitboxObjects2.length = 0;
gdjs.EndCode.GDLL77Objects1.length = 0;
gdjs.EndCode.GDLL77Objects2.length = 0;
gdjs.EndCode.GDCLObjects1.length = 0;
gdjs.EndCode.GDCLObjects2.length = 0;
gdjs.EndCode.GDSCDObjects1.length = 0;
gdjs.EndCode.GDSCDObjects2.length = 0;
gdjs.EndCode.GDSCD2Objects1.length = 0;
gdjs.EndCode.GDSCD2Objects2.length = 0;
gdjs.EndCode.GDSCD4Objects1.length = 0;
gdjs.EndCode.GDSCD4Objects2.length = 0;
gdjs.EndCode.GDSCD3Objects1.length = 0;
gdjs.EndCode.GDSCD3Objects2.length = 0;
gdjs.EndCode.GDoptionObjects1.length = 0;
gdjs.EndCode.GDoptionObjects2.length = 0;
gdjs.EndCode.GDWhite1BitSquareSliderBorderObjects1.length = 0;
gdjs.EndCode.GDWhite1BitSquareSliderBorderObjects2.length = 0;
gdjs.EndCode.GDWhite1BitSquareSliderBorder2Objects1.length = 0;
gdjs.EndCode.GDWhite1BitSquareSliderBorder2Objects2.length = 0;
gdjs.EndCode.GD_9538899_9525928Objects1.length = 0;
gdjs.EndCode.GD_9538899_9525928Objects2.length = 0;
gdjs.EndCode.GD_9538899_9527138Objects1.length = 0;
gdjs.EndCode.GD_9538899_9527138Objects2.length = 0;
gdjs.EndCode.GDEObjects1.length = 0;
gdjs.EndCode.GDEObjects2.length = 0;
gdjs.EndCode.GDquitBTN1Objects1.length = 0;
gdjs.EndCode.GDquitBTN1Objects2.length = 0;
gdjs.EndCode.GD_9532380_9532396Objects1.length = 0;
gdjs.EndCode.GD_9532380_9532396Objects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
