#!/bin/bash
cd "$(dirname "$0")"
echo "Starting server at http://localhost:8000"
echo "The site will open in your browser automatically..."
echo ""
echo "To stop the server, press Ctrl+C"
python3 server.py