package com.example.unscramble.ui

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import com.example.unscramble.data.allWords
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

class GameViewModel : ViewModel() {

    private  val _uiState = MutableStateFlow(GameUiState())
    val uiState: StateFlow<GameUiState> = _uiState.asStateFlow()
    var userGuess by mutableStateOf("")

    private lateinit var currentWord: String
    private var usedWords: MutableSet<String> = mutableSetOf()

    private fun pickRandomWordAndShuffles(): String {
        currentWord = allWords.random()
        if(usedWords.contains(currentWord)){
            return pickRandomWordAndShuffles()
        }
        else {
             usedWords.add(currentWord)
            return shuffleCurrentWord(currentWord)

        }
    }
    private fun shuffleCurrentWord(word:String) : String {
        val tempWord = word.toCharArray()
        //scramble the word
        tempWord.shuffle()
        while (String(tempWord).equals(word)) {
            tempWord.shuffle()
        }
        return String(tempWord)
    }
    private fun resetGame()  {
        usedWords.clear()
        _uiState.value= GameUiState(currentScrambleWord= pickRandomWordAndShuffles())
    }

    init {
        resetGame()
    }

    fun updateUserGuess(guessedWord : String) {
        userGuess = guessedWord
    }

    fun checkUserGuess() {
        if (userGuess.equals(currentWord, ignoreCase = true)) {

        } else {
            _uiState.update { currentState -> currentState.copy(isGuessedWordWrong = true) }
        }
        updateUserGuess("")
    }
}