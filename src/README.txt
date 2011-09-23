Notebook style theme for Sphinx.

Features
========
* provide ``notebook`` theme for render HTML document.


Set up
======
Make environment with easy_install::

    $ easy_install sphinxjp.themes.notebook


Convert Usage
=============
setup conf.py with::

    extensions = ['sphinxjp.themecore']
    html_theme = 'notebook'

and run::

    $ make html


Requirement
===========
* Python 2.4 or later (not support 3.x)
* Sphinx 1.0.x or later.


License
=======
Licensed under the `MIT license <http://www.opensource.org/licenses/mit-license.php>`_ .
See the LICENSE file for specific terms.
