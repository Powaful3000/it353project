-- Table: public.menu

-- DROP TABLE IF EXISTS public.menu;

CREATE TABLE IF NOT EXISTS public.menu
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default",
    price double precision,
    CONSTRAINT menu_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.menu
    OWNER to postgres;