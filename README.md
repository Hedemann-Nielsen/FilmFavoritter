# Film-Favoritter
Code Challange




# Installering
For at køre denne Applikation skal du følge denne installationsguide:

## Trin 1: Klone projektet fra GitHub
Åben VS Code og tryk på clone github repository
indset dette link: [FilmFavoritter](https://github.com/Hedemann-Nielsen/FilmFavoritter)

Naviger til den mappe, hvor du vil gemme projektet. Når projektet er indlæst trykker du på knappen Open når du bliver adspurgt.

## Trin 2: Installer afhængigheder
Åben terminalen. 
for at åbne terminalen kan du inden kommandoen navigere til terminalen ved at trykke: 'ctrl+j' Hvis genvejen ikke virker kan du åbne terminalen manuelt ved at vælge "View" i menuen, derefter "Terminal" eller ved at bruge kommandopalette (Ctrl + Shift + P eller Cmd + Shift + P på macOS) og søge efter "Toggle Integrated Terminal".
Når projektet er clonet, skal package.json indlæses. Dette gør du ved at skrive følgenede komando i terminalen: 
```
npm install
```




## Trin 3: Opsætning af Projektet

For at komme i gang med projektet, skal du have en `.env`-fil i rodmappen af projektet med de nødvendige miljøvariabler. Du kan oprette en `.env`-fil baseret på eksemplet nedenfor:

### `.env` filen skal se sådan ud:

```env
VITE_TMDB_API_KEY=din_api_key_her
VITE_TMDB_API_READ_ACCESS_TOKEN=din_api_access_token_her
VITE_TMDB_API_URL=https://api.themoviedb.org/3

``` 
Din API-nøgle og access token, kan du få ved at oprette en gratis bruger på TMDb's hjemmeside. [TMDb's hjemmeside](https://www.themoviedb.org/signup)




## Trin 4: Åbn browser
For at åbne browseren med filen skriver du følgende i terminalen: 
```
npm run dev
```

Nu burde du kunne tilgå applikationen angivet i terminalen (http://localhost:xxxx)

Funktionalitet
Projektet indeholder funktioner som:

Visning af film og serier baseret på genrer.
favoritliste hvor film og serier kan tilføjes og fjernes.
Responsiv design for mobil og tablet og desktop.
Teknologier brugt: 
* React.js
  * React-router-dom
  * React-icons
  * React-modal
  * Hamburger-react
  * link-react
* Vite
* TailwindCSS og Sass
* Axios
* TMDb API



## Noter
Husk at erstatte din_api_nøgler i .env-filen med din egen API-nøgle, da app'en ellers ikke fungere.
