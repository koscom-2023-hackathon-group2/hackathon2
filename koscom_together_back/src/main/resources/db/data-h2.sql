INSERT INTO member
(id, password, created_at, updated_at)
VALUES
    ('jiye1', '1',current_timestamp , current_timestamp ),
    ('jiye2', '1',current_timestamp , current_timestamp ),
    ('jiye3', '1',current_timestamp , current_timestamp ),
    ('jiye4', '1',current_timestamp , current_timestamp );

INSERT INTO STOCK_INFO
(ITEM_NAME, stock_Number, stock_Market, stock_Price, rate_Of_Return)
VALUES
    ('CJ', '001040', 'KOSPI', 77400, -2.42),
    ('HD현대',	'001040',	'KOSPI',	77400,	-2.42),
    ('KB금융',	'105560',	'KOSPI',	51800,	0.39),
    ('KT',	'030200',	'KOSPI',	32000,	1.25),
    ('LG',	'003550',	'KOSPI',	83200,	-1.08),
    ('LG화학',	'051910'	,'KOSPI',	631000,	-1.89),
    ('SK이노베이션',	'096770',	'KOSPI',	191600,	0.00),
    ('고려아연',	'010130',	'KOSPI',	500000,	0.20),
    ('남양유업',	'003920',	'KOSPI',	441500,	3.28),
    ('삼성전자',	'005930',	'KOSPI',	68400,	-0.74);

INSERT INTO ETF_INFO
(ITEM_NAME, stock_Number, stock_Market, stock_Price, rate_Of_Return)
VALUES
    ('ACE 국고채3년',	'114460',	'ACE',	101730,	0.01),
    ('ACE 미국다우존스리츠(합성 H)',	'181480',	'ACE',	76580,	0.00),
    ('ACE 종합채권(AA-이상)KIS액티브',	'356540',	'ACE',	95570,	-0.16),
    ('ACE 중장기국공채액티브',	'272910',	'ACE',	98035,	-0.06),
    ('ARIRANG KOFR금리',	'453010',	'ACE',	101455,	0.01);