"""Original local grade-9 mathematics. Fixed shapes keep area meaning visible."""
from manim import Scene, VGroup, Text, Line, Rectangle, Polygon, Create, linear

PAPER = '#f7f5f0'
INK = '#292c29'
GREEN = '#467060'
ORANGE = '#995519'
FONT = 'Hiragino Sans'
BLUE_TILE = '#bed3e7'
GREEN_TILE = '#c1d6bd'
ORANGE_TILE = '#f1cba0'
SMALL_TILE = '#e8dca2'


def label(value, size=32, color=INK):
    obj = Text(value, font=FONT, font_size=size, color=color)
    if obj.width > 12:
        obj.scale_to_fit_width(12)
    return obj


def region(obj, left, right, bottom, top, name):
    bounds = (float(obj.get_left()[0]), float(obj.get_right()[0]),
              float(obj.get_bottom()[1]), float(obj.get_top()[1]))
    assert left <= bounds[0] and bounds[1] <= right and bottom <= bounds[2] and bounds[3] <= top, (name, bounds)
    return obj


class LocalLesson(Scene):
    def setup(self):
        self.camera.background_color = PAPER
        self.caption = None
        self.equation = None

    def title(self, value):
        self.add(region(label(value, 39).move_to([0, 3.35, 0]), -6.3, 6.3, 2.95, 3.8, 'title'))
        self.add(Line([-6, 2.83, 0], [6, 2.83, 0], color='#d7dad3'))

    def say(self, value):
        if self.caption is not None:
            self.remove(self.caption)
        self.caption = region(label(value, 28).move_to([0, -3.2, 0]), -6.3, 6.3, -3.8, -2.75, 'caption')
        self.add(self.caption)

    def formula(self, value):
        if self.equation is not None:
            self.remove(self.equation)
        self.equation = region(label(value, 35, GREEN).move_to([0, -2.25, 0]), -6.3, 6.3, -2.6, -1.9, 'formula')
        self.add(self.equation)


class FactorAreaLesson(LocalLesson):
    def construct(self):
        self.title('因数分解：面積の和を、辺の積へ')
        # Positive lengths only. This drawing explicitly uses x=3 proportions.
        scale, x = .6, 3
        left, bottom = -4.8, -.8
        def tile(dx, dy, width, height, color, text):
            rect = Rectangle(width=width*scale, height=height*scale,
                             stroke_color=INK, stroke_width=2,
                             fill_color=color, fill_opacity=1)
            rect.move_to([left+(dx+width/2)*scale, bottom+(dy+height/2)*scale, 0])
            region(rect, -5, -.9, -1, 2.4, 'positive tile')
            self.add(rect, label(text, 32).move_to(rect.get_center()))
            assert abs(float(rect.width)*float(rect.height)-width*height*scale**2) < 1e-8
            return rect
        parts = [tile(0, 2, x, x, BLUE_TILE, 'x²'),
                 tile(x, 2, 3, x, ORANGE_TILE, '3x'),
                 tile(0, 0, x, 2, GREEN_TILE, '2x'),
                 tile(x, 0, 3, 2, SMALL_TILE, '6')]
        for value, xx in [('x', left+x*scale/2), ('3', left+(x+1.5)*scale)]:
            self.add(label(value, 27).move_to([xx, 2.52, 0]))
        self.add(label('x', 27).move_to([-5.2, 1.3, 0]),
                 label('2', 27).move_to([-5.2, -.2, 0]))
        note = label('x＞0。図はx＝3の比率。', 25).move_to([-3, -1.37, 0])
        self.add(region(note, -5.9, 0, -1.65, -1.1, 'positive domain'))
        first = label('面積を、4つに分ける', 33).move_to([2.5, 1.75, 0])
        self.add(region(first, -.1, 6.1, 1.35, 2.2, 'sum heading'))
        self.say('辺の長さが正のとき、面積は縦と横の積で表せる。')
        self.formula('x² ＋ 3x ＋ 2x ＋ 6')
        self.wait(5)

        middle = label('3x ＋ 2x ＝ 5x', 36, ORANGE).move_to([2.5, .75, 0])
        self.add(region(middle, -.1, 6.1, .25, 1.2, 'combine terms'))
        self.say('同じ文字の項をまとめる。面積の合計は変わらない。')
        self.formula('x² ＋ 5x ＋ 6')
        divider = Line([-3, -.8, 0], [-3, 2.2, 0], color=ORANGE, stroke_width=5)
        self.play(Create(divider), run_time=2, rate_func=linear)
        self.wait(4)

        dimensions = VGroup(label('横：x ＋ 3', 32).move_to([2.5, -.1, 0]),
                            label('縦：x ＋ 2', 32).move_to([2.5, -.8, 0]))
        for obj in dimensions:
            region(obj, -.1, 6.1, -1.2, .2, 'whole lengths')
        self.add(dimensions)
        self.say('同じ長方形の面積を、二つの辺の積で表し直す。')
        self.formula('x² ＋ 5x ＋ 6 ＝ (x ＋ 2)(x ＋ 3)')
        edge = Line([-4.8, -.8, 0], [-1.2, -.8, 0], color=GREEN, stroke_width=5)
        self.play(Create(edge), run_time=2, rate_func=linear)
        self.wait(4)

        self.remove(first, middle, dimensions)
        checks = VGroup(label('x＝3で確かめる', 34).move_to([2.5, 1.7, 0]),
                        label('9＋15＋6＝30', 34).move_to([2.5, .7, 0]),
                        label('(3＋2)(3＋3)＝30', 31).move_to([2.5, -.3, 0]))
        for obj in checks:
            region(obj, -.1, 6.1, -.8, 2.2, 'substitution')
        self.add(checks)
        self.say('因数分解した式を展開すると、元の式に戻る。')
        self.wait(5)
        assert x*x+3*x+2*x+6 == (x+2)*(x+3) == 30
        assert abs(sum(float(p.width)*float(p.height) for p in parts)-30*scale**2) < 1e-8
        print('JH3_VIDEO_GEOMETRY=PASS scene=factor x=3 scale=.6 areas=9,9,6,6 duration=22')


class PythagorasAreaLesson(LocalLesson):
    def construct(self):
        self.title('三平方の定理：三つの正方形')
        # Squares are constructed outward from the actual 3-4-5 triangle.
        scale = .34
        def point(x, y):
            return [-3+scale*x, -.3+scale*y, 0]
        polygons = [([(0, 0), (0, 3), (-3, 3), (-3, 0)], BLUE_TILE, 9),
                    ([(0, 0), (4, 0), (4, -4), (0, -4)], GREEN_TILE, 16),
                    ([(4, 0), (0, 3), (3, 7), (7, 4)], ORANGE_TILE, 25)]
        squares = []
        for vertices, color, area in polygons:
            square = Polygon(*(point(*p) for p in vertices), stroke_color=INK,
                             stroke_width=2, fill_color=color, fill_opacity=1)
            region(square, -4.2, -.5, -1.7, 2.2, 'side square')
            self.add(square)
            cx = sum(p[0] for p in vertices)/4
            cy = sum(p[1] for p in vertices)/4
            self.add(label(str(area), 30).move_to(point(cx, cy)))
            lengths = [sum((vertices[(i+1)%4][j]-vertices[i][j])**2 for j in [0, 1]) for i in range(4)]
            assert lengths == [area]*4
            signed_area = sum(vertices[i][0]*vertices[(i+1)%4][1]-vertices[(i+1)%4][0]*vertices[i][1] for i in range(4))/2
            assert abs(signed_area) == area
            squares.append(square)
        triangle = Polygon(point(0, 0), point(4, 0), point(0, 3),
                           stroke_color=INK, stroke_width=3,
                           fill_color=PAPER, fill_opacity=1)
        self.add(triangle)
        self.add(Line(point(.35, 0), point(.35, .35), color=INK),
                 Line(point(.35, .35), point(0, .35), color=INK))
        self.add(label('3', 22).move_to(point(.32, 1.5)),
                 label('4', 22).move_to(point(2, .32)),
                 label('5', 22).move_to(point(2.4, 1.95)))
        self.add(region(label('直角をはさむ辺：3と4', 32).move_to([2.5, 1.7, 0]), -.1, 6.2, 1.25, 2.15, 'legs'))
        self.add(region(label('直角の向かいの辺：5', 32).move_to([2.5, .9, 0]), -.1, 6.2, .5, 1.35, 'hypotenuse'))
        self.say('3、4、5の直角三角形。三辺の外側に正方形を作る。')
        self.formula('辺の長さと、正方形の面積を分けて考える')
        self.wait(5)

        first_sum = label('3²＝9、4²＝16', 36, GREEN).move_to([2.5, -.15, 0])
        self.add(region(first_sum, -.1, 6.2, -.6, .3, 'leg areas'))
        self.say('直角をはさむ二辺の正方形は、面積9と16。')
        self.formula('3² ＋ 4² ＝ 9 ＋ 16')
        edge = Line(point(-3, 0), point(-3, 3), color=GREEN, stroke_width=5)
        self.play(Create(edge), run_time=2, rate_func=linear)
        self.wait(4)

        self.add(region(label('5²＝25', 38, ORANGE).move_to([2.5, -1, 0]), -.1, 6.2, -1.45, -.55, 'hypotenuse area'))
        self.say('斜辺の正方形の面積25は、9と16の和に等しい。')
        self.formula('9 ＋ 16 ＝ 25、つまり 3² ＋ 4² ＝ 5²')
        hypotenuse = Line(point(4, 0), point(0, 3), color=ORANGE, stroke_width=5)
        self.play(Create(hypotenuse), run_time=2, rate_func=linear)
        self.wait(4)

        self.say('これは数値の例。成り立つ理由は、上の段階解説で。')
        self.formula('直角をはさむ二辺 a、b と斜辺 c：a²＋b²＝c²')
        self.wait(5)
        assert 3**2+4**2 == 5**2
        assert (4-0)*(0-0)+(0-0)*(3-0) == 0
        print('JH3_VIDEO_GEOMETRY=PASS scene=pythagoras scale=.34 areas=9,16,25 right_angle=true duration=22')
