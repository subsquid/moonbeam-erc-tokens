import { EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor';
import assert from 'assert';

export class BlockContextManager {
  private event: EvmLogEvent | null = null;

  private block: SubstrateBlock | null = null;

  init(block: SubstrateBlock, event: EvmLogEvent) {
    this.block = block;
    this.event = event;
    return this;
  }

  getCurrentEvent(): EvmLogEvent {
    assert(this.event, 'Current event is not available');
    const eventDecorated = this.event;
    if ('log' in eventDecorated.args && !('topics' in eventDecorated.args))
      eventDecorated.args = {
        ...this.event.args,
        ...this.event.args.log
      };
    return eventDecorated;
  }

  getCurrentBlock(): SubstrateBlock {
    assert(this.block, 'Current block is not available');
    return this.block;
  }

  resetBlockContext(): void {
    this.block = null;
    this.event = null;
  }
}
