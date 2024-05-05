import { MessageService } from "./message.service";

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should have no messages to start', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should add message when add() is called', () => {
    const message = 'Testing';

    service.add(message);

    expect(service.messages.length).toBe(1);
    expect(service.messages).toEqual([message]);
  });

  it('should clear the messsages when clear button is invoked',() => {
    service.messages = ['Hi'];

    service.clear();

    expect(service.messages.length).toBe(0);
    expect(service.messages).toEqual([]);
  });
});
