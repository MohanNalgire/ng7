#!/bin/bash

if node -v ge 12.0.0;then 
	echo "Node is present"
else
	echo "Install nodejs version 12 and greater"
fi

if npm -v ge 6.0.0 then 
	echo ""
else 
	echo "Install npm version 6.0.0 and greater"
fi



