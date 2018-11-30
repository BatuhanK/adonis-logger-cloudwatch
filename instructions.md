## Registering provider

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
  'adonis-logger-cloudwatch/providers/CloudwatchProvider'
]
```

Add new configuration inside `logger` module in `config/app.js`:
```js
cloudwatch: {
  driver: 'cloudwatch',
  name: 'cloudwatch-test',
  logGroupName: 'gifmaker',
  logStreamName: 'tests',
  awsRegion: 'us-east-2'
}
```

That's it! Now you can use Logger that will send data to Logentries.

```js
const Logger = use('Logger')

Logger.info('Test message')

```
