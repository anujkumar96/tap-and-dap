CREATE TABLE clients (
    client_id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_poc_name VARCHAR(255) NOT NULL,
    client_sales_poc_name VARCHAR(255) NOT NULL,
    client_contact_number VARCHAR(20) NOT NULL,
    client_contact_email VARCHAR(255) NOT NULL,
    client_description_text TEXT,
    client_country_name VARCHAR(255) NOT NULL,
    client_currency VARCHAR(10) NOT NULL,
    client_payment_term VARCHAR(50) NOT NULL
);CREATE TABLE clients (
    client_id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_location_country VARCHAR(255) NOT NULL,
    client_payment_currency VARCHAR(255) NOT NULL,
    client_payment_term VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    project_description TEXT,
    project_tech_stack VARCHAR(255),
    project_billing VARCHAR(255) NOT NULL,
    delivery_business_unit VARCHAR(255) NOT NULL,
    client_id INT NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (client_id)
);

CREATE TABLE revenue_forecast (
    forecast_id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    month DATE NOT NULL,
    forecast_value NUMERIC(15, 2) NOT NULL,
    notes TEXT,
    FOREIGN KEY (project_id) REFERENCES projects (project_id)
);

CREATE TABLE collection_forecast (
    forecast_id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    month DATE NOT NULL,
    forecast_value NUMERIC(15, 2) NOT NULL,
    notes TEXT,
    FOREIGN KEY (project_id) REFERENCES projects (project_id)
);

CREATE TABLE revenue_actuals (
    actuals_id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    month DATE NOT NULL,
    actual_value NUMERIC(15, 2) NOT NULL,
    notes TEXT,
    FOREIGN KEY (project_id) REFERENCES projects (project_id)
);

CREATE TABLE collection_actuals (
    actuals_id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    month DATE NOT NULL,
    actual_value NUMERIC(15, 2) NOT NULL,
    notes TEXT,
    FOREIGN KEY (project_id) REFERENCES projects (project_id)
);CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL,
    employee_designation VARCHAR(100) NOT NULL,
    employee_supervisor VARCHAR(100) NOT NULL,
    employee_bu VARCHAR(100) NOT NULL,
    employee_project VARCHAR(100) NOT NULL,
    employee_allocation DECIMAL(5,2) NOT NULL,
    employee_monthly_cost DECIMAL(10,2) NOT NULL
);

CREATE TABLE employee_notes (
    note_id SERIAL PRIMARY KEY,
    employee_id INT NOT NULL,
    note_text TEXT NOT NULL,
    note_date DATE NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees (employee_id)
);

CREATE TABLE employee_lwd (
    lwd_id SERIAL PRIMARY KEY,
    employee_id INT NOT NULL,
    lwd_date DATE NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees (employee_id)
);CREATE TABLE expense_category (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL,
    category_description TEXT,
    is_active BOOLEAN DEFAULT true
);

ALTER TABLE expense_category ADD CONSTRAINT unique_category_name UNIQUE (category_name);

ALTER TABLE expense_category ADD CONSTRAINT check_category_name_length CHECK (LENGTH(category_name) <= 100);

ALTER TABLE expense_category ADD CONSTRAINT check_category_description_length CHECK (LENGTH(category_description) <= 1000);CREATE TABLE expense_categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    active BOOLEAN DEFAULT true
);

CREATE TABLE expense_subcategories (
    id SERIAL PRIMARY KEY,
    subcategory_name VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES expense_categories(id),
    subcategory_description TEXT,
    active BOOLEAN DEFAULT true
);CREATE TABLE business_unit (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    business_unit_id INT NOT NULL,
    CONSTRAINT fk_business_unit
        FOREIGN KEY (business_unit_id)
        REFERENCES business_unit (id)
);

CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    business_unit_id INT NOT NULL,
    CONSTRAINT fk_business_unit
        FOREIGN KEY (business_unit_id)
        REFERENCES business_unit (id)
);

CREATE TABLE resource_allocation (
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    employee_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    role VARCHAR(255) NOT NULL,
    allocation_percentage INT NOT NULL,
    CONSTRAINT fk_project
        FOREIGN KEY (project_id)
        REFERENCES project (id),
    CONSTRAINT fk_employee
        FOREIGN KEY (employee_id)
        REFERENCES employee (id)
);CREATE TABLE clients (
    client_id SERIAL PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(100) NOT NULL,
    client_id INT NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (client_id)
);

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL
);

CREATE TABLE resource_allocation (
    allocation_id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    employee_id INT NOT NULL,
    allocation_date DATE NOT NULL,
    allocation_hours INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects (project_id),
    FOREIGN KEY (employee_id) REFERENCES employees (employee_id)
);

CREATE TABLE resource_cost_forecast (
    forecast_id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    employee_id INT NOT NULL,
    forecast_date DATE NOT NULL,
    forecast_cost DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects (project_id),
    FOREIGN KEY (employee_id) REFERENCES employees (employee_id)
);CREATE TABLE expense_category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE expense_subcategory (
    subcategory_id SERIAL PRIMARY KEY,
    subcategory_name VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES expense_category (category_id)
);

CREATE TABLE financial_year (
    year_id SERIAL PRIMARY KEY,
    year_start_date DATE NOT NULL,
    year_end_date DATE NOT NULL
);

CREATE TABLE expense_forecast (
    forecast_id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    subcategory_id INT NOT NULL,
    year_id INT NOT NULL,
    month INT NOT NULL,
    expense_cost DECIMAL(10, 2) NOT NULL,
    project_id INT,
    bu_id INT,
    FOREIGN KEY (category_id) REFERENCES expense_category (category_id),
    FOREIGN KEY (subcategory_id) REFERENCES expense_subcategory (subcategory_id),
    FOREIGN KEY (year_id) REFERENCES financial_year (year_id)
);

CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL
);

CREATE TABLE business_unit (
    bu_id SERIAL PRIMARY KEY,
    bu_name VARCHAR(255) NOT NULL
);

CREATE TABLE expense_rollup (
    rollup_id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    subcategory_id INT NOT NULL,
    year_id INT NOT NULL,
    month INT NOT NULL,
    expense_cost DECIMAL(10, 2) NOT NULL,
    bu_id INT,
    FOREIGN KEY (category_id) REFERENCES expense_category (category_id),
    FOREIGN KEY (subcategory_id) REFERENCES expense_subcategory (subcategory_id),
    FOREIGN KEY (year_id) REFERENCES financial_year (year_id),
    FOREIGN KEY (bu_id) REFERENCES business_unit (bu_id)
);