# Python code
#
basic.show_icon(IconNames.Happy)

def on_forever():
  pins.digital_write_pin(DigitalPin.P0, 1)
  pins.digital_write_pin(DigitalPin.P1, 0)
  basic.pause(10000)
  pins.digital_write_pin(DigitalPin.P1, 1)
  pins.digital_write_pin(DigitalPin.P0, 0)
  basic.pause(10000)
basic.forever(on_forever)