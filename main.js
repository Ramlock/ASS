// ==UserScript==
// @name         Auto Salien
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-plays Steam Salien
// @author       Someone
// @match        http://tampermonkey.net/index.php?version=4.6&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
setInterval(function(){
    if(!gGame || !gGame.m_State || gGame.m_IsStateLoading) return;

    if(gGame.m_State.m_EnemyManager && gGame.m_State.m_EnemyManager.m_rgEnemies &&
    gGame.m_State.m_EnemyManager.m_rgEnemies.entries().next().value) {
        gGame.m_State.m_EnemyManager.m_rgEnemies.entries().next().value[1].m_Sprite.click();
    }

},50);

setInterval(function(){
    if(!gGame || !gGame.m_State || gGame.m_IsStateLoading) return;

    if(gGame.m_State.m_Grid && gGame.m_State.m_Grid.m_Tiles){
        for (let i=0; i<gGame.m_State.m_Grid.m_Tiles.length; i++) {
            if(!gGame.m_State.m_Grid.m_Tiles[i].Info.captured && gGame.m_State.m_Grid.m_Tiles[i].Info.difficulty == 3) {
                gGame.m_State.m_Grid.click(Math.trunc(i%12),Math.trunc(i/12));
                return;
            }
        };
        for (let i=0; i<gGame.m_State.m_Grid.m_Tiles.length; i++) {
            if(!gGame.m_State.m_Grid.m_Tiles[i].Info.captured && gGame.m_State.m_Grid.m_Tiles[i].Info.difficulty == 2) {
                gGame.m_State.m_Grid.click(Math.trunc(i%12),Math.trunc(i/12));
                return;
            }
        };
        for (let i=0; i<gGame.m_State.m_Grid.m_Tiles.length; i++) {
            if(!gGame.m_State.m_Grid.m_Tiles[i].Info.captured && gGame.m_State.m_Grid.m_Tiles[i].Info.difficulty == 1) {
                gGame.m_State.m_Grid.click(Math.trunc(i%12),Math.trunc(i/12));
                return;
            }
        };
    }

    if(gGame.m_State.m_VictoryScreen && gGame.m_State.m_VictoryScreen.children[1])
    gGame.m_State.m_VictoryScreen.children[1].click();

    if(gGame.m_State.m_LevelUpScreen && gGame.m_State.m_LevelUpScreen.children[1])
    gGame.m_State.m_LevelUpScreen.children[1].click();
},2000);
})();
