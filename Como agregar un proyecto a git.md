Como agregar un proyecto a git
===============================

Suponiendo un proyecto nuevo (desde cero).
En un terminal ejecutar:

* `git init`: va a crear una rama *master*
* `git branch -m main`: Para renombrar la rama *master* a *main* (sólo si es necesario, por ejemplo un proyecto [github](http://github.com) crea por defecto una rama *main*)
* `git remote add origin <direccion del repo>`: indica a `git` donde se ubica el repositorio (y desde donde se deben hacer los `pushs`, `pulls`, `commits` y etc)
* `git branch --all`: Listado de todas las ramas. atencioón con las ramas de tipo remote que las pueden necesitar.
* `git branch --set-upstream-to=remotes/origin/main main`
* `git flow init`: Configura [git flow](https://danielkummer.github.io/git-flow-cheatsheet/). Sólo cambiar donde sugiere *master* por *main*
* `git checkout main`: Se cambia a la rama *main*
* `git pull`: Se trae lo que haya en el repo. Si el repo es nuevo va a *"mezclar"* las estructuras de carpetas.