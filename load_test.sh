#!/bin/bash

URL=$1
TOTAL_CYCLES=1000
PARALLEL_REQUESTS=20

for ((i=1; i<=TOTAL_CYCLES; i++))
do
    echo "Starting batch $i"

    for ((j=1; j<=PARALLEL_REQUESTS; j++))
    do
        curl -s -o /dev/null -w "Batch $i - Request $j - Status: %{http_code} | Time: %{time_total}s\n" "$URL" &
    done

    # Wait for all 20 requests to finish
    wait

    echo "Finished batch $i"
    echo "-----------------------------------"
done

echo "All requests completed."