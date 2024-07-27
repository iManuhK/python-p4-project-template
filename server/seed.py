#!/usr/bin/env python3

from faker import Faker
from app import app
from models import db, User, Package, Credit, Production, Industry
import random

fake = Faker()

with app.app_context():
    # Delete existing data
    User.query.delete()
    Package.query.delete()
    Credit.query.delete()
    Production.query.delete()
    Industry.query.delete()
    
    # Seed Users
    users = []
    for _ in range(3):
        user = User(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            role=random.choice(['user', 'admin']),
            username=fake.user_name(),
            email=fake.email(),
            password=fake.password(),
            active=True
        )
        users.append(user)
    db.session.add_all(users)
    db.session.commit()
    
    # Seed Packages

    package_names = ['Platinum', 'Gold', 'Silver', 'Bronze', 'Mwananchi']

    packages = []
    for name in package_names:
        package = Package(
            package_name=name,
            rate=round(fake.random_number(digits=2), 2),
            amount=fake.random_number(digits=5)
        )
        packages.append(package)

    db.session.add_all(packages)
    db.session.commit()

    # Seed Industries
    industries = []
    for _ in range(5):
        industry = Industry(
            industry_type=fake.word(),
            industry_name=fake.company(),
            Address=fake.address(),
            collection_point=fake.city(),
            contact_person=fake.name()
        )
        industries.append(industry)
    db.session.add_all(industries)
    db.session.commit()

    # Seed Credits
    credits = []
    for _ in range(20):
        credit = Credit(
            package_id=random.choice(packages).id,
            credit_amount=round(fake.random_number(digits=3), 2),
            user_id=random.choice(users).id
        )
        credits.append(credit)
    db.session.add_all(credits)
    db.session.commit()

    # Seed Productions
    productions = []
    for _ in range(20):
        production = Production(
            produce=fake.word(),
            production_in_kilos=fake.random_number(digits=2),
            sale_price=fake.random_number(digits=2),
            user_id=random.choice(users).id,
            industry_id=random.choice(industries).id
        )
        productions.append(production)
    db.session.add_all(productions)
    db.session.commit()

    print("Seeding completed!")
