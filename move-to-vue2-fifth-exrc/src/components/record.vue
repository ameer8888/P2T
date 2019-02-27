<template>
    <div>
        <div class="input-single">
            <textarea id="note
            -textarea" placeholder="Create a new note by typing or using voice recognition." rows="6" v-model="noteTextarea"></textarea>
        </div>         
        <button id="start-record-btn" title="Start Recording" @click="startRec">Start Recognition</button>
        <button id="pause-record-btn" title="Pause Recording" @click="stopRec">Pause Recognition</button>
        <button id="save-note-btn" title="Save Note" @click="clear">Clear pad </button>
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
        recordingStatus:"Press the Start Recognition button and allow access",
        isRecording: true,
      }
  },
  created() {
    this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.addEventListener('result', (event) => {
        var current = event.resultIndex;
        // Get a transcript of what was said.
        var transcript = event.results[current][0].transcript;

        console.log(transcript);
        this.noteContent += transcript;
        this.noteTextarea = this.noteContent;
    });
  },
  methods: {
      startRec() {
        if (this.noteContent.length) {
            this.noteContent += ' ';
        }
        console.log("start");
        this.recognition.start();
        this.recordingStatus = "Recording...";
      },
      stopRec() {
        console.log("stop");
        this.recognition.stop();
        this.recordingStatus = "Finish recording";

      },
      clear() {
          this.noteContent = '';
          this.noteTextarea = '';
          this.recordingStatus = "Press the Start Recognition button and allow access";

      },
  },

}
</script>