CREATE TABLE cigars (
    cigar_id SERIAL,
    cigar VARCHAR,
    length VARCHAR,
    ring_gauge INTEGER,
    country VARCHAR,
    shape VARCHAR,
    wrapper VARCHAR,
    binder VARCHAR,
    filler VARCHAR,
    color VARCHAR,
    strength VARCHAR,
    PRIMARY KEY ( cigar_id )
)

COPY cigars(cigar_id,cigar,length,ring_gauge,country,shape,wrapper,binder,filler,color,strength)
FROM 'CigarDB-Final2.csv'
DELIMITER ','
CSV HEADER;

SELECT * FROM cigars;