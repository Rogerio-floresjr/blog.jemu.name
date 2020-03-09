#! /usr/bin/env bash

# Hugo will be installed to ~/bin, translating to /etc/git-auto-deploy/bin
# Adding it to $PATH is kind of optional here, might as well call $HOME/bin/hugo in step 2
PATH=$HOME/bin:$PATH

# Desired hugo version in local setup
HUGO_VERSION_WANT="0.66.0"
# Getting current hugo version from itself and extracting the version string
HUGO_VERSION_HAVE=$(hugo version)
HUGO_VERSION_HAVE=$(echo -e "${HUGO_VERSION_HAVE:28:6}")

echo "Current PATH: $PATH"

echo ""
echo "##########################"
echo "# Restoring renv library #"
echo "##########################"
Rscript -e "renv::restore(packages = 'renv')"
Rscript -e "renv::restore()"

echo ""
echo "##########################"
echo "# Checking Hugo          #"
echo "##########################"

if [ "$HUGO_VERSION_HAVE" != "$HUGO_VERSION_HAVE" ]; then
    echo "Hugo versions mismatch: Have: $HUGO_VERSION_HAVE - want: $HUGO_VERSION_HAVE";
    echo "Installing hugo"
    Rscript -e "blogdown::install_hugo(version = \"$HUGO_VERSION_WANT\", force = FALSE)"
else
    echo "Hugo $HUGO_VERSION_WANT is already installed";
fi

# echo "Nuking /public"
# rm -rf public

echo ""
echo "##########################"
echo "# Building site          #"
echo "##########################"
Rscript -e "blogdown::build_site()"

echo ""
echo "##########################"
echo "# Done! $(date +'%F %H:%M:%S')"
echo "##########################"
