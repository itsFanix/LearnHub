package com.example.unscramble.ui

import androidx.lifecycle.ViewModel
import com.example.unscramble.data.allWords
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

class GameViewModel : ViewModel() {

    private  val _uiState = MutableStateFlow(GameUiState())
    val uiState: StateFlow<GameUiState> = _uiState.asStateFlow()

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
    fun resetGame()  {
        usedWords.clear()
        _uiState.value=GameUiState(currentScrambleWord= pickRandomWordAndShuffles())
    }

    init {
        resetGame()
    }
}