// why snoop when you can help make it better instead?
// if you're a friend and know how to exactly fix my issues please be my guest,
// i'm basically vibecoding it all

const commands = {
  "projects": "/projects/",
  "albums": "/albums/",
  "about": "/about.html",
  "blog": "/blog/",
  "auriblox": "https://auris-arc.vercel.app",
  "jack": "secrets/jack.png"
}

const terminalCommands = {
    help() {
        print("Available commands:");
        print("HELP CLS DIR VER WHOAMI");
        print("");
    },

    cls() {
        output.textContent = "";
    },

    ver() {
        print("Microsoft Windows [AURIX v1.1.0]");
        print("");
    },

    whoami() {
        print("AURASIS\\Aurisym");
        print("");
    },

    dir() {
      print(
` Volume in drive C is WEBSITE
 Volume Serial Number is 838X-3GSX

 Directory of C:\\Users\\Aurisym

06/17/2026  10:09 PM    <DIR>          .
06/17/2026  10:09 PM    <DIR>          ..
06/17/2026  10:09 PM                68 403.css
06/17/2026  10:09 PM               505 403.html
06/17/2026  10:09 PM                87 404.css
06/17/2026  10:09 PM    <DIR>          archives
06/17/2026  10:09 PM    <DIR>          blog
06/17/2026  10:09 PM    <DIR>          css
06/17/2026  10:09 PM    <DIR>          img
06/19/2026  09:32 AM             1,167 index.html
06/17/2026  10:09 PM    <DIR>          js
06/17/2026  10:09 PM               691 404.html
06/17/2026  10:09 PM    <DIR>          projects
06/17/2026  10:09 PM                 0 projects.html
06/17/2026  10:09 PM    <DIR>          secrets
06/17/2026  10:09 PM               245 wip.html
               7 File(s)          2,763 bytes
               9 Dir(s)  721,554,505,728 bytes free`
  );
    }
};