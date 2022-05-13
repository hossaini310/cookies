##### a) Wie kannst du erreichen, dass ein Cookie automatisch nach dem Schließen des Browsers gelöscht wird?

Mit einem Session-Cookie kann man die Daten automatisch speichern und sobald man den Browser schließen, werden alle Daten gelöscht.

##### b) Was ist CSRF?

Angriff auf ein Computersystem, bei dem der Angreifer eine Transaktion in einer Webanwendung durchführt.

##### c) Was sind Thrid-Party Cookies?

Thrid-Party Cookies sind Cookies, die nicht vom Betreiber der Website selbst, sondern von einem Dritten stammen.

##### d) Wie kannst du Cookies signieren?

Mit Cookie Secret. Das Cookie Secret ist ein String, der dem Server bekannt ist und verwendet wird, um die Cookies zu signieren, bevor sie an den Client gesendet werden.

##### e) Wieso ist das httpOnly Property wichtig?

httpOnly ist wichtig, dass man als Anwender das Cookie zwar mit den DevTools des im Browsers lesen kann, aber der Browser kann das Cookie nicht lesen. Stattdessen kommt ein leerer String zurück.

##### f) Welche Alternative gibt es zu Cookies?

- JSON Web Token
- Local Storage
- IndexedDB
