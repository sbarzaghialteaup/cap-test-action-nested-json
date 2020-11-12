# Getting Started

How to implement a custom action that receive a nested JSON?

`cds run`

Send `POST http://localhost:4004/say/upload` in `test.http`

POST http://localhost:4004/say/upload HTTP/1.1
Content-Type: application/json

```
{
	"cloudEventsVersion": "1.0",
	"eventID": "SRL-AB3C81A2BDB24CD7BCA3DCF0BB742B19",
	"eventType": "com.sap.appiot.eventtypes:SegmentNotifications",
	"source": "IOT-BSV-SEG",
	"eventTime": "2020-11-10T17:31:58.989Z",
	"contentType": "application/json",
	"extensions": {
		"modelId": "592D9BEA5FD74E3DBF2C9BF5BD7CDA26",
		"dataModel": "Thing",
		"correlationId": "ab3c81a2-bdb2-4cd7-bca3-dcf0bb742b19"
	},
	"data": [
		{
			"entityType": "SEGMENT",
			"action": "OPEN",
			"entityId": "xxx66-c287-47f2-8244-2617f5678f2b",
			"entityURL": "https://sap-iot-noah-live-segment-service.cfapps.eu10.hana.ondemand.com/v1/segments/d7e17366-c287-47f2-8244-2617f5678f2b"
		}
	]
}
```
