<template>
    <div id ="record">
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <div class="columns is-centered is-multiline">
            <div class="input-single column is-5">
                <textarea class="textarea" id="note-textarea" placeholder="Here will be your recorded note" rows="6" v-model="noteTextarea"></textarea>

            </div>  

            <div class="column is-5">
                    <div v-if="isRecording == false">
                    <a class="button is-outlined" @click="startRec"><i class="fa fa-play"></i></a>
                    <a class="button is-outlined" @click="clear"><i class="fa fa-undo"></i></a>
            
                    </div>
                    <div v-else>
                    <a class="button is-outlined" @click="stopRec"><i class="fa fa-pause"></i></a>
                    <a class="button is-outlined" @click="clear"><i class="fa fa-undo"></i></a>
            
                    </div>
                    <p>{{recordingStatus}}</p>
            </div>
        </div>
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
        'clean': () => {
        this.clear();
        },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
    }

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
        this.recordingStatus = "Press the start button to start recording";
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
        this.recordingStatus = "Press the start button to start recording";
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