package com.example.unscramble.ui

import kotlinx.coroutines.flow.MutableStateFlow

data class GameUiState(
    val currentScrambleWord: String = "") {
    //Game UI state
    private val _uiState = MutableStateFlow(GameUiState())

}
