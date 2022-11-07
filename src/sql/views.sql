create or replace view today as
  select id, account, amount, currency, category, source, to_char(created_at, 'HH24:Mi')
  from expense where created_at >= now()::date + interval '1h'
  order by created_at desc
