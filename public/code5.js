gdjs.FinishCode = {};
gdjs.FinishCode.localVariables = [];
gdjs.FinishCode.idToCallbackMap = new Map();
gdjs.FinishCode.GDNewTextObjects1= [];
gdjs.FinishCode.GDNewTextObjects2= [];
gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects1= [];
gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects2= [];
gdjs.FinishCode.GDPlayerObjects1= [];
gdjs.FinishCode.GDPlayerObjects2= [];
gdjs.FinishCode.GDEnemyObjects1= [];
gdjs.FinishCode.GDEnemyObjects2= [];
gdjs.FinishCode.GDTracerObjects1= [];
gdjs.FinishCode.GDTracerObjects2= [];
gdjs.FinishCode.GDEnemyTracerObjects1= [];
gdjs.FinishCode.GDEnemyTracerObjects2= [];
gdjs.FinishCode.GDPlayerHPObjects1= [];
gdjs.FinishCode.GDPlayerHPObjects2= [];
gdjs.FinishCode.GDPlayerHP2Objects1= [];
gdjs.FinishCode.GDPlayerHP2Objects2= [];
gdjs.FinishCode.GDPlayerHP3Objects1= [];
gdjs.FinishCode.GDPlayerHP3Objects2= [];
gdjs.FinishCode.GDGame_9595OverObjects1= [];
gdjs.FinishCode.GDGame_9595OverObjects2= [];
gdjs.FinishCode.GDTimeStopTintObjects1= [];
gdjs.FinishCode.GDTimeStopTintObjects2= [];
gdjs.FinishCode.GDHint_9595WObjects1= [];
gdjs.FinishCode.GDHint_9595WObjects2= [];
gdjs.FinishCode.GDNewTileMapObjects1= [];
gdjs.FinishCode.GDNewTileMapObjects2= [];
gdjs.FinishCode.GDDTObjects1= [];
gdjs.FinishCode.GDDTObjects2= [];
gdjs.FinishCode.GDNewTiledSpriteObjects1= [];
gdjs.FinishCode.GDNewTiledSpriteObjects2= [];
gdjs.FinishCode.GDSkillCardObjects1= [];
gdjs.FinishCode.GDSkillCardObjects2= [];
gdjs.FinishCode.GDYLObjects1= [];
gdjs.FinishCode.GDYLObjects2= [];
gdjs.FinishCode.GDNewLight9Objects1= [];
gdjs.FinishCode.GDNewLight9Objects2= [];
gdjs.FinishCode.GDAttackHitboxObjects1= [];
gdjs.FinishCode.GDAttackHitboxObjects2= [];
gdjs.FinishCode.GDLL77Objects1= [];
gdjs.FinishCode.GDLL77Objects2= [];
gdjs.FinishCode.GDCLObjects1= [];
gdjs.FinishCode.GDCLObjects2= [];
gdjs.FinishCode.GDSCDObjects1= [];
gdjs.FinishCode.GDSCDObjects2= [];
gdjs.FinishCode.GDSCD2Objects1= [];
gdjs.FinishCode.GDSCD2Objects2= [];
gdjs.FinishCode.GDSCD4Objects1= [];
gdjs.FinishCode.GDSCD4Objects2= [];
gdjs.FinishCode.GDSCD3Objects1= [];
gdjs.FinishCode.GDSCD3Objects2= [];
gdjs.FinishCode.GDoptionObjects1= [];
gdjs.FinishCode.GDoptionObjects2= [];
gdjs.FinishCode.GDWhite1BitSquareSliderBorderObjects1= [];
gdjs.FinishCode.GDWhite1BitSquareSliderBorderObjects2= [];
gdjs.FinishCode.GDWhite1BitSquareSliderBorder2Objects1= [];
gdjs.FinishCode.GDWhite1BitSquareSliderBorder2Objects2= [];
gdjs.FinishCode.GD_9538899_9525928Objects1= [];
gdjs.FinishCode.GD_9538899_9525928Objects2= [];
gdjs.FinishCode.GD_9538899_9527138Objects1= [];
gdjs.FinishCode.GD_9538899_9527138Objects2= [];
gdjs.FinishCode.GDEObjects1= [];
gdjs.FinishCode.GDEObjects2= [];
gdjs.FinishCode.GDquitBTN1Objects1= [];
gdjs.FinishCode.GDquitBTN1Objects2= [];
gdjs.FinishCode.GD_9532380_9532396Objects1= [];
gdjs.FinishCode.GD_9532380_9532396Objects2= [];


gdjs.FinishCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.FinishCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.FinishCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.FinishCode.GDNewTextObjects1[i].getBehavior("Text").setText("通關時間：" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))) + " 秒");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26980188);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://s1411322038gameserver.onrender.com/ranking", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton2"), gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects1[k] = gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


};

gdjs.FinishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinishCode.GDNewTextObjects1.length = 0;
gdjs.FinishCode.GDNewTextObjects2.length = 0;
gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects1.length = 0;
gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects2.length = 0;
gdjs.FinishCode.GDPlayerObjects1.length = 0;
gdjs.FinishCode.GDPlayerObjects2.length = 0;
gdjs.FinishCode.GDEnemyObjects1.length = 0;
gdjs.FinishCode.GDEnemyObjects2.length = 0;
gdjs.FinishCode.GDTracerObjects1.length = 0;
gdjs.FinishCode.GDTracerObjects2.length = 0;
gdjs.FinishCode.GDEnemyTracerObjects1.length = 0;
gdjs.FinishCode.GDEnemyTracerObjects2.length = 0;
gdjs.FinishCode.GDPlayerHPObjects1.length = 0;
gdjs.FinishCode.GDPlayerHPObjects2.length = 0;
gdjs.FinishCode.GDPlayerHP2Objects1.length = 0;
gdjs.FinishCode.GDPlayerHP2Objects2.length = 0;
gdjs.FinishCode.GDPlayerHP3Objects1.length = 0;
gdjs.FinishCode.GDPlayerHP3Objects2.length = 0;
gdjs.FinishCode.GDGame_9595OverObjects1.length = 0;
gdjs.FinishCode.GDGame_9595OverObjects2.length = 0;
gdjs.FinishCode.GDTimeStopTintObjects1.length = 0;
gdjs.FinishCode.GDTimeStopTintObjects2.length = 0;
gdjs.FinishCode.GDHint_9595WObjects1.length = 0;
gdjs.FinishCode.GDHint_9595WObjects2.length = 0;
gdjs.FinishCode.GDNewTileMapObjects1.length = 0;
gdjs.FinishCode.GDNewTileMapObjects2.length = 0;
gdjs.FinishCode.GDDTObjects1.length = 0;
gdjs.FinishCode.GDDTObjects2.length = 0;
gdjs.FinishCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.FinishCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.FinishCode.GDSkillCardObjects1.length = 0;
gdjs.FinishCode.GDSkillCardObjects2.length = 0;
gdjs.FinishCode.GDYLObjects1.length = 0;
gdjs.FinishCode.GDYLObjects2.length = 0;
gdjs.FinishCode.GDNewLight9Objects1.length = 0;
gdjs.FinishCode.GDNewLight9Objects2.length = 0;
gdjs.FinishCode.GDAttackHitboxObjects1.length = 0;
gdjs.FinishCode.GDAttackHitboxObjects2.length = 0;
gdjs.FinishCode.GDLL77Objects1.length = 0;
gdjs.FinishCode.GDLL77Objects2.length = 0;
gdjs.FinishCode.GDCLObjects1.length = 0;
gdjs.FinishCode.GDCLObjects2.length = 0;
gdjs.FinishCode.GDSCDObjects1.length = 0;
gdjs.FinishCode.GDSCDObjects2.length = 0;
gdjs.FinishCode.GDSCD2Objects1.length = 0;
gdjs.FinishCode.GDSCD2Objects2.length = 0;
gdjs.FinishCode.GDSCD4Objects1.length = 0;
gdjs.FinishCode.GDSCD4Objects2.length = 0;
gdjs.FinishCode.GDSCD3Objects1.length = 0;
gdjs.FinishCode.GDSCD3Objects2.length = 0;
gdjs.FinishCode.GDoptionObjects1.length = 0;
gdjs.FinishCode.GDoptionObjects2.length = 0;
gdjs.FinishCode.GDWhite1BitSquareSliderBorderObjects1.length = 0;
gdjs.FinishCode.GDWhite1BitSquareSliderBorderObjects2.length = 0;
gdjs.FinishCode.GDWhite1BitSquareSliderBorder2Objects1.length = 0;
gdjs.FinishCode.GDWhite1BitSquareSliderBorder2Objects2.length = 0;
gdjs.FinishCode.GD_9538899_9525928Objects1.length = 0;
gdjs.FinishCode.GD_9538899_9525928Objects2.length = 0;
gdjs.FinishCode.GD_9538899_9527138Objects1.length = 0;
gdjs.FinishCode.GD_9538899_9527138Objects2.length = 0;
gdjs.FinishCode.GDEObjects1.length = 0;
gdjs.FinishCode.GDEObjects2.length = 0;
gdjs.FinishCode.GDquitBTN1Objects1.length = 0;
gdjs.FinishCode.GDquitBTN1Objects2.length = 0;
gdjs.FinishCode.GD_9532380_9532396Objects1.length = 0;
gdjs.FinishCode.GD_9532380_9532396Objects2.length = 0;

gdjs.FinishCode.eventsList0(runtimeScene);
gdjs.FinishCode.GDNewTextObjects1.length = 0;
gdjs.FinishCode.GDNewTextObjects2.length = 0;
gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.FinishCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects1.length = 0;
gdjs.FinishCode.GDWhiteSquareDecoratedButton2Objects2.length = 0;
gdjs.FinishCode.GDPlayerObjects1.length = 0;
gdjs.FinishCode.GDPlayerObjects2.length = 0;
gdjs.FinishCode.GDEnemyObjects1.length = 0;
gdjs.FinishCode.GDEnemyObjects2.length = 0;
gdjs.FinishCode.GDTracerObjects1.length = 0;
gdjs.FinishCode.GDTracerObjects2.length = 0;
gdjs.FinishCode.GDEnemyTracerObjects1.length = 0;
gdjs.FinishCode.GDEnemyTracerObjects2.length = 0;
gdjs.FinishCode.GDPlayerHPObjects1.length = 0;
gdjs.FinishCode.GDPlayerHPObjects2.length = 0;
gdjs.FinishCode.GDPlayerHP2Objects1.length = 0;
gdjs.FinishCode.GDPlayerHP2Objects2.length = 0;
gdjs.FinishCode.GDPlayerHP3Objects1.length = 0;
gdjs.FinishCode.GDPlayerHP3Objects2.length = 0;
gdjs.FinishCode.GDGame_9595OverObjects1.length = 0;
gdjs.FinishCode.GDGame_9595OverObjects2.length = 0;
gdjs.FinishCode.GDTimeStopTintObjects1.length = 0;
gdjs.FinishCode.GDTimeStopTintObjects2.length = 0;
gdjs.FinishCode.GDHint_9595WObjects1.length = 0;
gdjs.FinishCode.GDHint_9595WObjects2.length = 0;
gdjs.FinishCode.GDNewTileMapObjects1.length = 0;
gdjs.FinishCode.GDNewTileMapObjects2.length = 0;
gdjs.FinishCode.GDDTObjects1.length = 0;
gdjs.FinishCode.GDDTObjects2.length = 0;
gdjs.FinishCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.FinishCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.FinishCode.GDSkillCardObjects1.length = 0;
gdjs.FinishCode.GDSkillCardObjects2.length = 0;
gdjs.FinishCode.GDYLObjects1.length = 0;
gdjs.FinishCode.GDYLObjects2.length = 0;
gdjs.FinishCode.GDNewLight9Objects1.length = 0;
gdjs.FinishCode.GDNewLight9Objects2.length = 0;
gdjs.FinishCode.GDAttackHitboxObjects1.length = 0;
gdjs.FinishCode.GDAttackHitboxObjects2.length = 0;
gdjs.FinishCode.GDLL77Objects1.length = 0;
gdjs.FinishCode.GDLL77Objects2.length = 0;
gdjs.FinishCode.GDCLObjects1.length = 0;
gdjs.FinishCode.GDCLObjects2.length = 0;
gdjs.FinishCode.GDSCDObjects1.length = 0;
gdjs.FinishCode.GDSCDObjects2.length = 0;
gdjs.FinishCode.GDSCD2Objects1.length = 0;
gdjs.FinishCode.GDSCD2Objects2.length = 0;
gdjs.FinishCode.GDSCD4Objects1.length = 0;
gdjs.FinishCode.GDSCD4Objects2.length = 0;
gdjs.FinishCode.GDSCD3Objects1.length = 0;
gdjs.FinishCode.GDSCD3Objects2.length = 0;
gdjs.FinishCode.GDoptionObjects1.length = 0;
gdjs.FinishCode.GDoptionObjects2.length = 0;
gdjs.FinishCode.GDWhite1BitSquareSliderBorderObjects1.length = 0;
gdjs.FinishCode.GDWhite1BitSquareSliderBorderObjects2.length = 0;
gdjs.FinishCode.GDWhite1BitSquareSliderBorder2Objects1.length = 0;
gdjs.FinishCode.GDWhite1BitSquareSliderBorder2Objects2.length = 0;
gdjs.FinishCode.GD_9538899_9525928Objects1.length = 0;
gdjs.FinishCode.GD_9538899_9525928Objects2.length = 0;
gdjs.FinishCode.GD_9538899_9527138Objects1.length = 0;
gdjs.FinishCode.GD_9538899_9527138Objects2.length = 0;
gdjs.FinishCode.GDEObjects1.length = 0;
gdjs.FinishCode.GDEObjects2.length = 0;
gdjs.FinishCode.GDquitBTN1Objects1.length = 0;
gdjs.FinishCode.GDquitBTN1Objects2.length = 0;
gdjs.FinishCode.GD_9532380_9532396Objects1.length = 0;
gdjs.FinishCode.GD_9532380_9532396Objects2.length = 0;


return;

}

gdjs['FinishCode'] = gdjs.FinishCode;
