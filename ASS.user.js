// ==UserScript==
// @name         ASS
// @namespace    https://github.com/Ramlock/ASS/
// @version      1.2.3
// @description  Auto Steam Salien
// @author       Ramlock
// @match        *://steamcommunity.com/saliengame/play
// @match        *://steamcommunity.com/saliengame/play/*
// @updateURL    https://raw.githubusercontent.com/Ramlock/ASS/master/ASS.user.js
// @downloadURL  https://raw.githubusercontent.com/Ramlock/ASS/master/ASS.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
setInterval(function(){
    if(!gGame || !gGame.m_State || gGame.m_IsStateLoading) return;

    if(gGame.m_State.m_EnemyManager && gGame.m_State.m_EnemyManager.m_rgEnemies &&
    gGame.m_State.m_EnemyManager.m_rgEnemies.entries()) {
        gGame.m_State.m_EnemyManager.m_rgEnemies.forEach(function(e){e.m_Sprite.click());
    }

},200);

setInterval(function(){
    
    let elems = document.getElementsByClassName("btn_grey_white_innerfade");
    if(elems && elems.length == 1){
        document.getElementsByClassName("btn_grey_white_innerfade")[0].click();
        return;
    }
    
    if(!gGame || !gGame.m_State || gGame.m_IsStateLoading){
        return;
    }
    
    if(gGame.m_State.button){
        gGame.m_State.button.click();
    }
    
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
