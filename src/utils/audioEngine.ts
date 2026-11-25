import { MusicStyle, MusicVolume } from '../types';

interface StylePreset {
  bpm: number;
  rootMidi: number;
  chordIntervals: number[][];
  bassPattern: number[];
  arpPattern: number[];
  kickSteps: number[];
  hatSteps: number[];
  rimSteps: number[];
  padWave: OscillatorType;
  leadWave: OscillatorType;
  filterCutoff: number;
}

const STYLE_PRESETS: Record<Exclude<MusicStyle, 'Mix'>, StylePreset> = {
  Corporate: {
    bpm: 112,
    rootMidi: 60, // C4
    chordIntervals: [
      [0, 4, 7, 11],  // Cmaj7
      [9, 12, 16, 19], // Am7
      [5, 9, 12, 16],  // Fmaj7
      [7, 11, 14, 19], // G6
    ],
    bassPattern: [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    arpPattern: [0, 2, 1, 3, 2, 3, 1, 2, 0, 1, 2, 3, 1, 3, 2, 0],
    kickSteps: [0, 4, 8, 12],
    hatSteps: [2, 6, 10, 14, 15],
    rimSteps: [4, 12],
    padWave: 'triangle',
    leadWave: 'sine',
    filterCutoff: 2100,
  },
  Pop: {
    bpm: 118,
    rootMidi: 62, // D4
    chordIntervals: [
      [0, 4, 7, 11],
      [7, 11, 14, 18],
      [9, 12, 16, 19],
      [5, 9, 12, 16],
    ],
    bassPattern: [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
    arpPattern: [0, 1, 2, 3, 2, 1, 0, 2, 1, 2, 3, 2, 1, 0, 2, 3],
    kickSteps: [0, 4, 8, 12],
    hatSteps: [0, 2, 4, 6, 8, 10, 12, 14],
    rimSteps: [4, 12],
    padWave: 'triangle',
    leadWave: 'triangle',
    filterCutoff: 2500,
  },
  Groove: {
    bpm: 110,
    rootMidi: 58, // Bb3
    chordIntervals: [
      [0, 3, 7, 10],  // m7
      [5, 8, 12, 15], // m7
      [7, 10, 14, 17],
      [3, 7, 10, 14],
    ],
    bassPattern: [1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
    arpPattern: [0, 3, 1, 2, 0, 2, 3, 1, 2, 0, 3, 1, 0, 2, 1, 3],
    kickSteps: [0, 3, 8, 10],
    hatSteps: [2, 4, 6, 10, 12, 14],
    rimSteps: [4, 12],
    padWave: 'sine',
    leadWave: 'triangle',
    filterCutoff: 2300,
  },
  House: {
    bpm: 122,
    rootMidi: 60,
    chordIntervals: [
      [0, 3, 7, 10],
      [8, 12, 15, 19],
      [5, 8, 12, 15],
      [7, 10, 14, 17],
    ],
    bassPattern: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
    arpPattern: [0, 2, 3, 2, 0, 1, 3, 1, 0, 2, 3, 2, 1, 3, 2, 0],
    kickSteps: [0, 4, 8, 12],
    hatSteps: [2, 6, 10, 14],
    rimSteps: [4, 12],
    padWave: 'triangle',
    leadWave: 'sawtooth',
    filterCutoff: 1950,
  },
  Chill: {
    bpm: 98,
    rootMidi: 65, // F4
    chordIntervals: [
      [0, 4, 7, 11],
      [4, 7, 11, 14],
      [9, 12, 16, 19],
      [7, 11, 14, 17],
    ],
    bassPattern: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    arpPattern: [0, 1, 2, 3, 1, 2, 0, 3, 2, 1, 0, 2, 3, 1, 2, 0],
    kickSteps: [0, 8, 11],
    hatSteps: [2, 6, 10, 14],
    rimSteps: [4, 12],
    padWave: 'sine',
    leadWave: 'sine',
    filterCutoff: 1700,
  },
  'Lo-fi': {
    bpm: 92,
    rootMidi: 60,
    chordIntervals: [
      [2, 5, 9, 12],  // Dm7
      [7, 11, 14, 17], // G7
      [0, 4, 7, 11],  // Cmaj7
      [9, 12, 16, 19], // Am7
    ],
    bassPattern: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    arpPattern: [0, 2, 1, 3, 0, 3, 2, 1, 0, 1, 3, 2, 0, 2, 1, 0],
    kickSteps: [0, 7, 8],
    hatSteps: [2, 4, 6, 10, 12, 14],
    rimSteps: [4, 12],
    padWave: 'triangle',
    leadWave: 'sine',
    filterCutoff: 1450,
  },
  'Électro': {
    bpm: 124,
    rootMidi: 57, // A3
    chordIntervals: [
      [0, 3, 7, 10],
      [3, 7, 10, 14],
      [7, 10, 14, 17],
      [5, 9, 12, 16],
    ],
    bassPattern: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
    arpPattern: [0, 3, 2, 3, 1, 3, 2, 3, 0, 2, 1, 3, 2, 3, 1, 0],
    kickSteps: [0, 4, 8, 12],
    hatSteps: [2, 6, 10, 14, 15],
    rimSteps: [4, 12],
    padWave: 'sawtooth',
    leadWave: 'triangle',
    filterCutoff: 2200,
  },
  'Ciné': {
    bpm: 105,
    rootMidi: 60,
    chordIntervals: [
      [0, 4, 7, 11],
      [5, 9, 12, 16],
      [9, 12, 16, 19],
      [7, 11, 14, 19],
    ],
    bassPattern: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    arpPattern: [0, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 2, 0, 1, 2, 3],
    kickSteps: [0, 6, 8, 14],
    hatSteps: [4, 12],
    rimSteps: [8],
    padWave: 'triangle',
    leadWave: 'sine',
    filterCutoff: 1850,
  },
};

const VOLUME_MAP: Record<MusicVolume, number> = {
  Faible: 0.08,
  Moyen: 0.17,
  Fort: 0.28,
};

function midiToFreq(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

export class GenerativeAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private masterFilter: BiquadFilterNode | null = null;
  private isPlaying = false;
  private currentStyle: MusicStyle = 'Corporate';
  private currentVolume: MusicVolume = 'Moyen';
  private stepTimer: number | null = null;
  private renewalTimer: number | null = null;
  private stepIndex = 0;
  private transposeSemitones = 0;
  private tempoMultiplier = 1.0;
  private activeMixStyle: Exclude<MusicStyle, 'Mix'> = 'Corporate';
  private noiseBuffer: AudioBuffer | null = null;

  public start(style: MusicStyle, volume: MusicVolume): void {
    this.currentStyle = style;
    this.currentVolume = volume;

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);

      this.masterFilter = this.ctx.createBiquadFilter();
      this.masterFilter.type = 'lowpass';
      this.masterFilter.frequency.setValueAtTime(2100, this.ctx.currentTime);
      this.masterFilter.Q.setValueAtTime(0.7, this.ctx.currentTime);

      this.masterFilter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.noiseBuffer = this.createNoiseBuffer(this.ctx);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    const now = this.ctx.currentTime;
    const targetGain = VOLUME_MAP[this.currentVolume];
    if (this.masterGain) {
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(Math.max(0.0001, this.masterGain.gain.value), now);
      // Smooth fade-in
      this.masterGain.gain.linearRampToValueAtTime(targetGain, now + 1.2);
    }

    if (!this.isPlaying) {
      this.isPlaying = true;
      this.stepIndex = 0;
      this.scheduleNextStep();
      this.startRenewalCycle();
    } else {
      this.updateFilterForStyle();
    }
  }

  public stop(): void {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;
    this.isPlaying = false;

    if (this.stepTimer !== null) {
      window.clearTimeout(this.stepTimer);
      this.stepTimer = null;
    }
    if (this.renewalTimer !== null) {
      window.clearInterval(this.renewalTimer);
      this.renewalTimer = null;
    }

    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(Math.max(0.0001, this.masterGain.gain.value), now);
    // Smooth fade-out
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.7);
  }

  public setStyle(style: MusicStyle): void {
    this.currentStyle = style;
    if (style !== 'Mix') {
      this.activeMixStyle = style;
    }
    this.updateFilterForStyle();
  }

  public setVolume(volume: MusicVolume): void {
    this.currentVolume = volume;
    if (this.ctx && this.masterGain && this.isPlaying) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(VOLUME_MAP[volume], now + 0.35);
    }
  }

  private getPreset(): StylePreset {
    const key = this.currentStyle === 'Mix' ? this.activeMixStyle : this.currentStyle;
    return STYLE_PRESETS[key] || STYLE_PRESETS.Corporate;
  }

  private updateFilterForStyle(): void {
    if (!this.ctx || !this.masterFilter) return;
    const preset = this.getPreset();
    this.masterFilter.frequency.setTargetAtTime(preset.filterCutoff, this.ctx.currentTime, 0.3);
  }

  private startRenewalCycle(): void {
    if (this.renewalTimer !== null) {
      window.clearInterval(this.renewalTimer);
    }
    // Renew every 2.2 minutes (135 seconds) : change key transposition, tempo nuance, and mix style
    this.renewalTimer = window.setInterval(() => {
      const shifts = [-3, -2, 0, 2, 3, 5];
      this.transposeSemitones = shifts[Math.floor(Math.random() * shifts.length)];
      this.tempoMultiplier = 0.96 + Math.random() * 0.08;

      if (this.currentStyle === 'Mix') {
        const allStyles = Object.keys(STYLE_PRESETS) as Exclude<MusicStyle, 'Mix'>[];
        this.activeMixStyle = allStyles[Math.floor(Math.random() * allStyles.length)];
      }
      this.updateFilterForStyle();
    }, 135000);
  }

  private scheduleNextStep(): void {
    if (!this.isPlaying || !this.ctx || !this.masterFilter) return;

    const preset = this.getPreset();
    const effectiveBpm = preset.bpm * this.tempoMultiplier;
    const sixteenthDurationMs = (60 / effectiveBpm / 4) * 1000;

    const stepInBar = this.stepIndex % 16;
    const barIndex = Math.floor(this.stepIndex / 16) % preset.chordIntervals.length;
    const chord = preset.chordIntervals[barIndex];
    const rootNote = preset.rootMidi + this.transposeSemitones;

    const now = this.ctx.currentTime;

    // 1. Kick drum
    if (preset.kickSteps.includes(stepInBar)) {
      this.triggerKick(now);
    }

    // 2. Soft Hi-Hat
    if (preset.hatSteps.includes(stepInBar)) {
      this.triggerHat(now, stepInBar % 4 === 2 ? 0.09 : 0.045);
    }

    // 3. Subtle Rim/Snare pulse
    if (preset.rimSteps.includes(stepInBar)) {
      this.triggerRim(now);
    }

    // 4. Warm Chord Pad on beat 0 of every bar
    if (stepInBar === 0 || stepInBar === 8) {
      this.triggerChordPad(now, rootNote, chord, preset.padWave, (sixteenthDurationMs * 8) / 1000);
    }

    // 5. Bassline
    if (preset.bassPattern[stepInBar] === 1) {
      const bassMidi = rootNote - 12 + chord[0];
      this.triggerBass(now, bassMidi, (sixteenthDurationMs * 1.8) / 1000);
    }

    // 6. Melodic Pluck / Arpeggio
    const arpIdx = preset.arpPattern[stepInBar] % chord.length;
    if (stepInBar % 2 === 0 || preset.bassPattern[stepInBar] === 1) {
      const noteMidi = rootNote + chord[arpIdx] + (stepInBar % 4 === 0 ? 12 : 0);
      this.triggerPluck(now, noteMidi, preset.leadWave, (sixteenthDurationMs * 1.6) / 1000);
    }

    this.stepIndex++;
    this.stepTimer = window.setTimeout(() => this.scheduleNextStep(), sixteenthDurationMs);
  }

  private triggerKick(time: number): void {
    if (!this.ctx || !this.masterFilter) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(115, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + 0.14);

    gain.gain.setValueAtTime(0.42, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

    osc.connect(gain);
    gain.connect(this.masterFilter);
    osc.start(time);
    osc.stop(time + 0.19);
  }

  private triggerHat(time: number, amp: number): void {
    if (!this.ctx || !this.masterFilter || !this.noiseBuffer) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.setValueAtTime(6500, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(amp, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.045);

    src.connect(hp);
    hp.connect(gain);
    gain.connect(this.masterFilter);
    src.start(time);
    src.stop(time + 0.05);
  }

  private triggerRim(time: number): void {
    if (!this.ctx || !this.masterFilter) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(340, time);
    osc.frequency.exponentialRampToValueAtTime(160, time + 0.05);

    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);

    osc.connect(gain);
    gain.connect(this.masterFilter);
    osc.start(time);
    osc.stop(time + 0.065);
  }

  private triggerBass(time: number, midi: number, dur: number): void {
    if (!this.ctx || !this.masterFilter) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(midiToFreq(midi), time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(0.28, time + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, time + dur);

    osc.connect(gain);
    gain.connect(this.masterFilter);
    osc.start(time);
    osc.stop(time + dur + 0.02);
  }

  private triggerChordPad(
    time: number,
    rootMidi: number,
    intervals: number[],
    wave: OscillatorType,
    dur: number
  ): void {
    if (!this.ctx || !this.masterFilter) return;
    intervals.forEach((interval) => {
      if (!this.ctx || !this.masterFilter) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = wave;
      osc.frequency.setValueAtTime(midiToFreq(rootMidi + interval), time);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(0.065, time + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, time + dur);

      osc.connect(gain);
      gain.connect(this.masterFilter);
      osc.start(time);
      osc.stop(time + dur + 0.05);
    });
  }

  private triggerPluck(
    time: number,
    midi: number,
    wave: OscillatorType,
    dur: number
  ): void {
    if (!this.ctx || !this.masterFilter) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = wave;
    osc.frequency.setValueAtTime(midiToFreq(midi), time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(0.09, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, time + dur);

    osc.connect(gain);
    gain.connect(this.masterFilter);
    osc.start(time);
    osc.stop(time + dur + 0.02);
  }

  private createNoiseBuffer(ctx: AudioContext): AudioBuffer {
    const bufferSize = ctx.sampleRate * 0.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }
}

export const audioEngine = new GenerativeAudioEngine();
