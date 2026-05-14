create database pw2_app_web;
use pw2_app_web;

select * from alunos;

insert into alunos (nome, turma, matricula, presenca, data_nascimento, avaliado_em) values
('Aluno 1', 'ADS 5º Período', '2026001', true, '2000-01-01', NOW()),
('Aluno 2', 'ADS 5º Período', '2026002', false, '2000-02-02', NOW()),
('Aluno 3', 'ADS 5º Período', '2026003', true, '2000-03-03', NOW()),
('Aluno 4', 'ADS 5º Período', '2026004', true, '2000-04-04', NOW()),
('Aluno 5', 'ADS 5º Período', '2026005', false, '2000-05-05', NOW()),
('Aluno 6', 'ADS 5º Período', '2026006', true, '2000-06-06', NOW()),
('Aluno 7', 'ADS 5º Período', '2026007', true, '2000-07-07', NOW()),
('Aluno 8', 'ADS 5º Período', '2026008', false, '2000-08-08', NOW()),
('Aluno 9', 'ADS 5º Período', '2026009', true, '2000-09-09', NOW()),
('Aluno 10', 'ADS 5º Período', '2026010', true, '2000-10-10', NOW());