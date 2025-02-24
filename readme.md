# Programma per inserimeto dati per acquisto di biglietti del treno

## Descrizione 
il programma deve elaborare il prezzo in base alle informazioni date dal cliente.
Le informazioni sono: l'età del passeggero e il kilometraggio percorso

### Dati da elaborare
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

### Svolgimento azioni del programma 
- acquisire dati cliente tramite prompt
    - richiedere al cliente l'èta
    - richiedere al cliente il kilometraggio
- calcolo del prezzo in base all'kilometraggio (0.21€ al km )
- calcolo dello sconto in base all'età
    - bisogna applicare lo sconto del 20% agli under 18
    - bisogna applicare lo sconto del 40% agli over 65
- formattare il prezzo in un massimo di 2 decimali per renderlo visibile 
