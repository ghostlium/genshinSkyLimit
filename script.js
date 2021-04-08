"use strict"

// with help from @Arc-blroth
document.querySelectorAll("form").forEach(form => {
  let previousSubmit = form.onsubmit
  form.onsubmit = e => {
    e.preventDefault()
    if (previousSubmit) {
      previousSubmit(e)
    }
  }
})

//arrays
const keyToSky = new Map([
  ["1Key0", "A1"],
  ["1Key1", "A2"],
  ["1Key2", "A3"],
  ["1Key3", "A4"],
  ["1Key4", "A5"],
  ["1Key5", "A6"],
  ["1Key6", "A7"],
  ["1Key7", "B1"],
  ["1Key8", "B2"],
  ["1Key9", "B3"],
  ["1Key10", "B4"],
  ["1Key11", "B5"],
  ["1Key12", "B6"],
  ["1Key13", "B7"],
  ["1Key14", "C1"],
  ["2Key0", "A1"],
  ["2Key1", "A2"],
  ["2Key2", "A3"],
  ["2Key3", "A4"],
  ["2Key4", "A5"],
  ["2Key5", "A6"],
  ["2Key6", "A7"],
  ["2Key7", "B1"],
  ["2Key8", "B2"],
  ["2Key9", "B3"],
  ["2Key10", "B4"],
  ["2Key11", "B5"],
  ["2Key12", "B6"],
  ["2Key13", "B7"],
  ["2Key14", "C1"],
  ["3Key0", "A1"],
  ["3Key1", "A2"],
  ["3Key2", "A3"],
  ["3Key3", "A4"],
  ["3Key4", "A5"],
  ["3Key5", "A6"],
  ["3Key6", "A7"],
  ["3Key7", "B1"],
  ["3Key8", "B2"],
  ["3Key9", "B3"],
  ["3Key10", "B4"],
  ["3Key11", "B5"],
  ["3Key12", "B6"],
  ["3Key13", "B7"],
  ["3Key14", "C1"],
])

function jsonInput() {
  // take string and turn to usable json
  let myObj = JSON.parse(document.getElementById("jsonInput").value)
  // steal the songnotes
  let songNotes = myObj.songNotes

  let time = []
  let notes = []

  //steal the time and keys
  for (let i = 0; i < songNotes.length; i++) {
    time.push(songNotes[i].time)
    notes.push(keyToSky.get(songNotes[i].key))
  }
  for (let i = songNotes.length; i > 0; i--) {
    if (time[i] == time[i - 1]) {
      notes[i - 1] = notes[i - 1] + "-" + notes[i]
      notes.splice(i, 1)
    }
  }

  document.getElementById("notation").innerHTML = "Notation: "+notes
  document.getElementById("timing").innerHTML = "Timing: "+time
}

function skyInput() {
  let notes = document.getElementById("skyInput").value
  let skyNotation = ["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5"]
  let genshinNotation = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "C1"]
  //steal the time and keys
  for (let i = 0; i < skyNotation.length; i++) {
    notes = notes.replaceAll(skyNotation[i],genshinNotation[i])
  }

  //test print the original thing w/o the time changes
  document.getElementById("notation").innerHTML = "Notation: "+notes
  document.getElementById("timing").innerHTML = "Timing: n/a"
}

function abcTodoremi(){
  let notes = document.getElementById("abcTodoremi").value
  let genshinNotation = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "C1"]
  let doremiNotation = ["Do1", "Re1","Mi1", "Fa1", "So1", "La1", "Ti1", "Do2", "Re2", "Mi2", "Fa2", "So2", "La2", "Ti2", "Do3"]
  //steal the time and keys
  for (let i = 0; i < genshinNotation.length; i++) {
    notes = notes.replaceAll(genshinNotation[i],doremiNotation[i])
  }

  //test print the original thing w/o the time changes
  document.getElementById("notation").innerHTML = "Notation: "+notes
  document.getElementById("timing").innerHTML = "Timing: n/a"
}

function abcToKeyboard(){
  let notes = document.getElementById("abcToKeyboard").value
  let genshinNotation = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "C1"]
  let keyboardNotation = ["Z", "X","C", "V", "B", "N", "M", "A", "S", "D", "F", "G", "H", "J", "Q"]
  //steal the time and keys
  for (let i = 0; i < genshinNotation.length; i++) {
    notes = notes.replaceAll(genshinNotation[i],keyboardNotation[i])
  }

  //test print the original thing w/o the time changes
  document.getElementById("notation").innerHTML = "Notation: "+notes
  document.getElementById("timing").innerHTML = "Timing: n/a"
}