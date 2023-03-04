import { AgentWrapper } from '../../types';
import { agent } from './agent';
import { soundMp3 } from './sounds-mp3';
import { soundOgg } from './sounds-ogg';

export const Bonzi: AgentWrapper = {
    name: 'Bonzi',
    config: agent,
    soundMp3,
    soundOgg,
}