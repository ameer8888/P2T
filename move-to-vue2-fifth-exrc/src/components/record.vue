<template>
    <div id ="record">
        <div class="input-single">
            <textarea id="note
            -textarea" placeholder="Here will be your recorded note" rows="6" v-model="noteTextarea"></textarea>
        </div>         
        <div v-if="isRecording == false">
        <button id="start-record-btn" @click="startRec">Start</button>
        <button id="save-note-btn" @click="clear">Clear</button>

        </div>
        <div v-else>
        <button id="pause-record-btn" @click="stopRec">Pause</button>
        <button id="save-note-btn" @click="clear">Clear</button>

        </div>

        <p id="recording-instructions">{{recordingStatus}}</p>
    </div>
</template>

<script>
export default {
  name: 'record',
  data() {
      return {
        SpeechRecognition:'',
        recognition:'',
        noteContent:'',
        noteTextarea:'',
        recordingStatus:"Press the start button to start recording",
        isRecording: false,
      }
  },
  created() {

    if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        'start': () => {
        this.startRec();
        },
        'clear': () => {
        this.clear();
        },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
    }
//-----------------------------------------------
    this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.addEventListener('result', (event) => {
        this.isRecording = false;
        var current = event.resultIndex;
        // Get a transcript of what was said.
        var transcript = event.results[current][0].transcript;

        console.log(transcript);
        this.noteContent += transcript;
        this.noteTextarea = this.noteContent;
        this.recordingStatus = "Finish recording";
        annyang.start();
    });
  },
  methods: {
      startRec() {
        annyang.abort();
        if (this.noteContent.length) {
            this.noteContent += ' ';
        }
        console.log("start");
        this.recognition.start();
        this.isRecording = true;
        this.recordingStatus = "Recording...";
      },
      stopRec() {
        console.log("stop");
        this.recognition.stop();
        this.recordingStatus = "Finish recording";
        this.isRecording = false;
      },
      clear() {
          this.noteContent = '';
          this.noteTextarea = '';
          this.recordingStatus = "Press the start button to start recording";
      },
  },

}
</script>