
#include <IRremote.h>

#define RECV_PIN 2
#define LEDRGB_GREEN 4
#define LEDRGB_BLUE 7
#define LEDRGB_RED 12

#define OKBUTTON 64

#define ZERO 82
#define ONE 22
#define TWO 25
#define THREE 13
#define FOUR 12
#define FIVE 24
#define SIX 94
#define SEVEN 8
#define EIGHT 28
#define NINE 90

#define HASHTAG 74
#define STAR 66

const long code[3] = {THREE, FIVE, EIGHT};

int count = 0;

boolean lollo = true;

long arrayNumber[3];


void setup() {
  Serial.begin(115200);
  IrReceiver.begin(RECV_PIN, ENABLE_LED_FEEDBACK);
  pinMode(LEDRGB_GREEN,OUTPUT);
  pinMode(LEDRGB_BLUE,OUTPUT);
  pinMode(LEDRGB_RED,OUTPUT);
}

void loop() {
  if (IrReceiver.decode() && lollo) {
    arrayNumber[count] = IrReceiver.decodedIRData.command;
    Serial.println(IrReceiver.decodedIRData.command);
    digitalWrite(LEDRGB_RED,HIGH);
    count++;
    delay(200);
    IrReceiver.resume();
  }
     digitalWrite(LEDRGB_RED,LOW);

  if (count == 3){
    if(arrayNumber[0] == code[0] && arrayNumber[1] == code[1] && arrayNumber[2] == code[2]){
      Serial.println("The code is right");
      digitalWrite(LEDRGB_GREEN,HIGH);
      lollo = false;
    }else{
      Serial.println("The code is wrong retry again :D");
      analogWrite(LEDRGB_RED,255);
      analogWrite(LEDRGB_GREEN,255);
      analogWrite(LEDRGB_BLUE,255);
      delay(2000);
      analogWrite(LEDRGB_RED,0);
      analogWrite(LEDRGB_GREEN,0);
      analogWrite(LEDRGB_BLUE,0);
    }
    delay(1000);
    count = 0;
  }


}