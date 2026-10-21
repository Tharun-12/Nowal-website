/**
 * Web Audio API synthesized forest ambiance & gentle acoustic stream
 * 100% self-contained, no external mp3 assets needed.
 */

class NatureAmbianceSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private streamGain: GainNode | null = null;
  private chimeTimer: number | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public play() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    try {
      // Create pink noise buffer for soft bubbling stream
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      // Soft low-pass filter to sound like gentle mountain brook
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      this.streamGain = this.ctx.createGain();
      this.streamGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.streamGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 2);

      noise.connect(filter);
      filter.connect(this.streamGain);
      this.streamGain.connect(this.ctx.destination);
      noise.start();

      // Trigger periodic soft gentle chime tones (Tibetan bowl resonance)
      this.scheduleRandomChime();

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  private scheduleRandomChime() {
    if (!this.isPlaying || !this.ctx) return;

    const playChime = () => {
      if (!this.isPlaying || !this.ctx) return;
      const chimeFreqs = [528, 432, 639, 396, 741]; // Solfeggio / healing frequencies
      const freq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.02, this.ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 3.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 3.6);

      // Next chime in 5-10 seconds
      const nextDelay = 5000 + Math.random() * 5000;
      this.chimeTimer = window.setTimeout(playChime, nextDelay);
    };

    this.chimeTimer = window.setTimeout(playChime, 2500);
  }

  public stop() {
    if (this.streamGain && this.ctx) {
      this.streamGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
    }
    if (this.chimeTimer) {
      clearTimeout(this.chimeTimer);
      this.chimeTimer = null;
    }
    this.isPlaying = false;
  }
}

export const natureAudio = new NatureAmbianceSynthesizer();
